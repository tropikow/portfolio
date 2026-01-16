import express from 'express';
import { v1Router } from './modules/router';

const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/about', (req, res) => {
//   res.send('Hello World!');
// });

app.use(
  '/v1',
  v1Router
)

app.listen(port, () => {
  return console.log(`Express is listening at 12 http://localhost:${port}`);
});
