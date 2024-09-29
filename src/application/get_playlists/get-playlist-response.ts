import ApplicationResponse from '../../shared/application/application-response';
import Playlist from '../../domain/playlist/playlist';

class GetPlaylistResponse implements ApplicationResponse {
  private constructor(private readonly playlist: Playlist[]) {}

  public static create(playlists: Playlist[]): GetPlaylistResponse {
    return new GetPlaylistResponse(playlists);
  }
  toPrimitives(): object[] {
    return this.playlist.map((playlist) => {
      return {
        id: playlist.id,
        name: playlist.name,
        genre: playlist.genre,
        favorite: playlist.favorite,
      };
    });
  }
}

export default GetPlaylistResponse;
