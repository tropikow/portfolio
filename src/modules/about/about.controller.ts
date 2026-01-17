import { Request, Response, NextFunction } from 'express';
import { responseHandlers } from '../shared/httpResponses';

const httpResponse = new responseHandlers();

export const aboutController = (req: Request, res: Response, next: NextFunction) => {
  try {
    return httpResponse.SUCCESSFULLY(res)
  } catch (error) {
    if(error instanceof Error) {
      return httpResponse.INTERNAL_ERROR(error)
    } else {
      return httpResponse.INTERNAL_ERROR()
    }
  }
}