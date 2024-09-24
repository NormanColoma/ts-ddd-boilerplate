import { Router } from 'express';

interface BaseController {
  routes(): Router;
}

export default BaseController;
