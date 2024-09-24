import ApplicationCommand from '../../shared/application/application-command';

class GetPlaylistCommand implements ApplicationCommand {
  private readonly _genre: string;

  constructor({ genre } : { genre: string }) {
    this._genre = genre;
  }

  public get genre(): string {
    return this._genre;
  }
}

export default GetPlaylistCommand;
