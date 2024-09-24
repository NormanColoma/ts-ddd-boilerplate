import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  InternalServerErrorResponse,
  ResourceNotFoundResponse,
  UnprocessableEntityResponse,
} from '../responses';
import ApplicationError from '../../../../domain/exception/application-error';
import ResourceNotFoundError from '../../../../domain/exception/resource-not-found-error';

class ErrorHandler {
  public handle(err: Error, req: Request, res: Response, next: NextFunction): Response {
    if (res.headersSent) {
      next(err);
    }

    if (err instanceof ApplicationError) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json(UnprocessableEntityResponse(err));
    } else if (err instanceof ResourceNotFoundError) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json(ResourceNotFoundResponse(err));
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(InternalServerErrorResponse);
  }
}

export default ErrorHandler;
