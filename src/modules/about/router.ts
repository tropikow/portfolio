import Router from 'express'
import { aboutController } from './about.controller';

const aboutRouter = Router();

aboutRouter.get(
  '/',
  aboutController
)

export { aboutRouter };