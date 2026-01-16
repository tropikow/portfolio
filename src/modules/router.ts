import Router from 'express'
import { aboutRouter } from './about/router';

const v1Router = Router();

v1Router.use(
  '/about',
  aboutRouter
)

export { v1Router };