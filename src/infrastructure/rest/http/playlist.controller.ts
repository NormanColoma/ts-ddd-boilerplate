import { Router, Response, Request } from 'express';
import BaseController from '../../../shared/infrastructure/rest/http/base-controller';

class PlaylistController implements BaseController {
  constructor(private readonly router: Router) {
    this.router = router;
  }

  private get(request: Request, response: Response): void {
    response.status(200).send('Hello World');
  }

  public routes(): Router {
    this.router.get('/', this.get);
    return this.router;
  }
}

export default PlaylistController;
