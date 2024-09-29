import ApplicationService from '../../shared/application/application-service';
import PlaylistRepository from '../../domain/playlist/playlist-repository';
import CreatePlaylistCommand from './create-playlist-command';
import Playlist from '../../domain/playlist/playlist';
import EventBus from '../../shared/domain/bus/event/event-bus';

class CreatePlaylist implements ApplicationService {
  private readonly playlistRepository: PlaylistRepository;
  private readonly eventBus: EventBus;

  constructor({ playlistRepository, eventBus } : { playlistRepository: PlaylistRepository, eventBus: EventBus }) {
    this.playlistRepository = playlistRepository;
    this.eventBus = eventBus;
  }

  async execute(command: CreatePlaylistCommand): Promise<void> {
    const playlist = Playlist.create(command);

    await this.playlistRepository.save(playlist);
    await this.eventBus.publish(playlist.pullEvents());
  }
}

export default CreatePlaylist;
