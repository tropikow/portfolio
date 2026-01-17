import path from 'node:path'
import dotenv from 'dotenv';
import * as z from "zod";
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

dotenv.config({ path: path.join(__dirname, '../../../.env') })

export const config = {
  SUPABASE: {
    SUPABASE_URL: process.env.SUPABASE_URL ?? '',
    SUPABASE_PRIVATE_KEY: process.env.SUPABASE_PRIVATE_KEY ?? ''
  }
}

let supabase: SupabaseClient | null = null;

const schema = z.string().min(1);  

const configSchema = z.object({
  SUPABASE: z.object({
    SUPABASE_URL: schema,
    SUPABASE_PRIVATE_KEY: schema
  })
})

// export const supabase = createClient(
//   config.SUPABASE.SUPABASE_URL, 
//   config.SUPABASE.SUPABASE_PRIVATE_KEY
// )

export const validateEnvironmentConfig = async() => {
  const result = configSchema.safeParse(config);  
  if(!result.success) {
    let errorMessage = 'Environment config failed\n\n'
    errorMessage += JSON.stringify(result.error)
    throw new Error(errorMessage)
  }      
}

export const validateConexionDb = async() => {
  supabase = createClient(
    config.SUPABASE.SUPABASE_URL, 
    config.SUPABASE.SUPABASE_PRIVATE_KEY
  )
  const timeoutPromise = new Promise((_,reject) => 
    setTimeout(() => reject(new Error('Database connection timeout')), 10000)
  )  
  const queryPromise = supabase
  .from('profiles')
  .select('id')
  .limit(1);

  const { error } = await Promise.race([queryPromise, timeoutPromise]) as { error: any, data: any };
  if(error) {
    let errorMessage = 'Connection failed with database\n\n'
    errorMessage += JSON.stringify(error)
    throw new Error(errorMessage)
  }
}

export const validateConfig = async() => {
  await validateEnvironmentConfig()
  await validateConexionDb()
}

export { supabase }