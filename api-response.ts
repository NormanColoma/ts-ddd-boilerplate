import applicationResponse from '../../../application/application-response';

interface ApiResponse {
  data: object;
}

interface ErrorResponse {
  data: {
    message: string;
    error?: string;
    statusCode?: number;
  };
}

class ApiResponseParser {
  toJson(applicationResponse: applicationResponse): ApiResponse {
    return {
      data: applicationResponse.toJson(),
    };
  }
}

class ErrorResponseParser {
  toJson(data: object): ErrorResponse {
    return {
      data: {
        message: data['message'],
        error: data['error'],
        statusCode: data['statusCode'],
      },
    };
  }
}

export { ApiResponseParser, ApiResponse, ErrorResponseParser };
