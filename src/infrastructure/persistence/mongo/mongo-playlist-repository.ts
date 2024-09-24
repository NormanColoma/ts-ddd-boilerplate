
import PlaylistRepository from '../../../domain/playlist/playlist-repository';
import { v4 as uuidv4 } from 'uuid';
import { PlaylistDocument, MongoPlaylistParser } from './mongo-parser';
import Playlist from '../../../domain/playlist/playlist';

const playlistsDocuments: PlaylistDocument[] = [
  {
    _id: uuidv4(),
    name: 'Rock Classics',
    genre: 'rap',
    favorite: false,
    createdAt: new Date(),
  },
];

class MongoPlaylistRepository implements PlaylistRepository {
  constructor(
    private readonly parser: MongoPlaylistParser,
  ) {}

  async find(genre: string): Promise<Playlist[]> {
    const playlists: Playlist[] = playlistsDocuments.map((it) =>
      this.parser.to_domain_object(it),
    );
    return playlists.filter((it) => it.genre === genre);
  }
}

export default MongoPlaylistRepository;
