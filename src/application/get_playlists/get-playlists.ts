import ApplicationService from '../../shared/application/application-service';
import GetPlaylistResponse from './get-playlist-response';
import GetPlaylistCommand from './get-playlist-command';
import PlaylistRepository from '../../domain/playlist/playlist-repository';
import Playlist from '../../domain/playlist/playlist';

class GetPlaylists implements ApplicationService {
  private playlistRepository: PlaylistRepository;

  constructor({ playlistRepository }: { playlistRepository: PlaylistRepository }) {
    this.playlistRepository = playlistRepository;
  }

  async execute(command: GetPlaylistCommand): Promise<GetPlaylistResponse> {
    const playlists: Playlist[] = await this.playlistRepository.find(
      command.genre,
    );

    return GetPlaylistResponse.create(playlists);
  }
}

export default GetPlaylists;
