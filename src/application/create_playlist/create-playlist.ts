import ApplicationService from '../../shared/application/application-service';
import PlaylistRepository from '../../domain/playlist/playlist-repository';
import CreatePlaylistCommand from './create-playlist-command';
import Playlist from '../../domain/playlist/playlist';

class CreatePlaylist implements ApplicationService {
  private readonly playlistRepository: PlaylistRepository;

  constructor({ playlistRepository } : { playlistRepository: PlaylistRepository }) {
    this.playlistRepository = playlistRepository;
  }

  async execute(command: CreatePlaylistCommand): Promise<void> {
    const playlist = Playlist.create(command);
    await this.playlistRepository.save(playlist);
  }
}

export default CreatePlaylist;
