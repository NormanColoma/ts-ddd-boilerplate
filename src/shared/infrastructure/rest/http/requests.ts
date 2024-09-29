import { Request } from 'express';

interface ApiRequest<T> extends Request {
  body: T;
}

export default ApiRequest;
