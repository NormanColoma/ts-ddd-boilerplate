import { NextFunction, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  ErrorResponse,
  InternalServerErrorResponse,
  ResourceNotFoundResponse,
  UnprocessableEntityResponse,
} from '../responses';
import ApplicationError from '../../../../domain/exception/application-error';
import ResourceNotFoundError from '../../../../domain/exception/resource-not-found-error';
import Logger from '../../../../domain/services/logger';

const errorHandler = ({ logger } : { logger: Logger }) => {
  return (err: Error, req: Request, res: ErrorResponse, next: NextFunction) => {
    if (res.headersSent) {
      next(err);
    }

    logger.error(`Error : ${err.message}`);

    if (err instanceof ApplicationError) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json(UnprocessableEntityResponse(err));
    } else if (err instanceof ResourceNotFoundError) {
      return res.status(StatusCodes.NOT_FOUND).json(ResourceNotFoundResponse(err));
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(InternalServerErrorResponse);
  };
};

export default errorHandler;
