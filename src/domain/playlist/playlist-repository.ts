import Playlist from './playlist';

export default interface PlaylistRepository {
  find(genre: string): Promise<Playlist[]>;
}
