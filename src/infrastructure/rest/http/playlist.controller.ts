import { Router, Response, Request } from 'express';
import BaseController from '../../../shared/infrastructure/rest/http/base-controller';
import GetPlaylists from '../../../application/get_playlists/get-playlists';
import { ApiResponse } from '../../../shared/infrastructure/rest/http/responses';
import CreatePlaylist from '../../../application/create_playlist/create-playlist';
import { StatusCodes } from 'http-status-codes';
import GetPlaylistCommand from '../../../application/get_playlists/get-playlist-command';
import CreatePlaylistCommand from '../../../application/create_playlist/create-playlist-command';
class PlaylistController implements BaseController {
  private readonly router: Router;
  private readonly getPlaylists: GetPlaylists;
  private readonly createPlaylist: CreatePlaylist;

  constructor({ router, getPlaylists, createPlaylist }
  : { router: Router, getPlaylists: GetPlaylists, createPlaylist: CreatePlaylist }) {
    this.router = router;
    this.getPlaylists = getPlaylists;
    this.createPlaylist = createPlaylist;
  }

  private async _getPlaylist(request: Request, response: ApiResponse):
  Promise<ApiResponse> {
    const { genre } = request.query;
    const command = { genre } as GetPlaylistCommand;
    const result = await this.getPlaylists.execute(command);

    return response.status(StatusCodes.OK).json({ data: result.toPrimitives() });
  }

  private async _createPlaylist(request: Request, response: Response):
  Promise<Response> {
    const { genre, name } = request.body;

    const command = { genre, name } as CreatePlaylistCommand;
    await this.createPlaylist.execute(command);

    return response.status(StatusCodes.CREATED).send();
  }

  public routes(): Router {
    this.router.get('/', this._getPlaylist.bind(this));
    this.router.post('/', this._createPlaylist.bind(this));
    return this.router;
  }
}

export default PlaylistController;
