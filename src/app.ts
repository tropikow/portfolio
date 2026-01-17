import express from 'express';
import { v1Router } from './modules/router';
import { validateConfig } from './modules/config';

const app = express();
const port = 3000;

app.use(
  '/v1',
  v1Router
)

app.listen(port, async() => {
  await validateConfig();  
  console.log(`Express is listening at http://localhost:${port}`);
});
