import { Response } from "express";

export class responseHandlers {
  public async SUCCESSFULLY(res: Response, message?: string) {    
    return res.status(200).json({      
      res: message ?? 'OK'
    })
  }
  public async BAD_REQUEST(res: Response, message?: string) {    
    return res.status(400).json({      
      res: `ERROR BAD_REQUEST, ${message ?? 'error in params or body, check it and try again'}`,
    })
  }
  public async INTERNAL_ERROR(error?: Error) {
    console.log('error during execution:',error?.stack ?? error)
  }
}