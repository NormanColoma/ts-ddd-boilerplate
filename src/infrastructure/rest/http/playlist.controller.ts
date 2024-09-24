import { Router, Response, Request } from 'express';
import BaseController from '../../../shared/infrastructure/rest/http/base-controller';
import ApplicationError from '../../../shared/domain/exception/application-error';
import ResourceNotFoundError from '../../../shared/domain/exception/resource-not-found-error';

class PlaylistController implements BaseController {
  constructor(private readonly router: Router) {
    this.router = router;
  }

  private get(request: Request, response: Response): void {
    throw new ApplicationError('Method not implemented.');
    response.status(200).send('Hello World');
  }

  public routes(): Router {
    this.router.get('/', this.get);
    return this.router;
  }
}

export default PlaylistController;
