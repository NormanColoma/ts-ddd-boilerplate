import Playlist from './playlist';

export default interface PlaylistRepository {
  save(playlist: Playlist): Promise<void>;
  find(genre: string): Promise<Playlist[]>;
}
