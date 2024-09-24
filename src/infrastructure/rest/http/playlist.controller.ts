import { Router, Response, Request } from 'express';
import BaseController from '../../../shared/infrastructure/rest/http/base-controller';
import GetPlaylists from '../../../application/get_playlists/get-playlists';
import GetPlaylistCommand from '../../../application/get_playlists/get-playlist-command';

class PlaylistController implements BaseController {
  private readonly router: Router;
  private readonly getPlaylists: GetPlaylists;

  constructor({ router, getPlaylists } : { router: Router, getPlaylists: GetPlaylists }) {
    this.router = router;
    this.getPlaylists = getPlaylists;
  }

  private async get(request: Request, response: Response): Promise<Response> {
    // throw new ApplicationError('Method not implemented.');
    const command = new GetPlaylistCommand({ genre: 'rap' });
    const result = await this.getPlaylists.execute(command);

    return response.status(200).json({ data: result.toJson() });
  }

  public routes(): Router {
    this.router.get('/', this.get.bind(this));
    return this.router;
  }
}

export default PlaylistController;
