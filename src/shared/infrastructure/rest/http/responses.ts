import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

type ApiResponse = Response<{
  data: object
}>;

type ErrorResponse = Response<{
  message: string;
  error?: string;
  statusCode?: number;
}>;

const InternalServerErrorResponse = {
  message: 'Internal server error',
  error: 'Internal server error',
  statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
};

const ResourceNotFoundResponse = (err: Error) => {
  return {
    message: 'Resource not found',
    error: err.constructor.name,
    statusCode: StatusCodes.NOT_FOUND,
  };
};

const UnprocessableEntityResponse = (err: Error) => {
  return {
    message: err.message,
    error: err.constructor.name,
    statusCode: StatusCodes.UNPROCESSABLE_ENTITY,
  };
};

export {
  ApiResponse, ErrorResponse, InternalServerErrorResponse,
  ResourceNotFoundResponse, UnprocessableEntityResponse,
};
