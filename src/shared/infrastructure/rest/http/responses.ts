import { StatusCodes } from 'http-status-codes';
import { Response } from 'express';

type ApiResponse = Response<{
  data: object;
}>;

interface ErrorResponse {
  message: string;
  error?: string;
  statusCode?: number;
}

const InternalServerErrorResponse: ErrorResponse = {
  message: 'Internal server error',
  error: 'Internal server error',
  statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
};

const UnprocessableEntityResponse = (err: Error): ErrorResponse => {
  return {
    message: err.message,
    error: err.constructor.name,
    statusCode: StatusCodes.UNPROCESSABLE_ENTITY,
  };
};

const ResourceNotFoundResponse = (err: Error): ErrorResponse => {
  return {
    message: 'Resource not found',
    error: err.constructor.name,
    statusCode: StatusCodes.NOT_FOUND,
  };
};

export {
  ApiResponse, ErrorResponse, InternalServerErrorResponse,
  ResourceNotFoundResponse, UnprocessableEntityResponse,
};
