
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

// This is a fake implementation of a MongoDB repository
class MongoPlaylistRepository implements PlaylistRepository {
  private readonly playlistParser: MongoPlaylistParser;

  constructor({ playlistParser } : { playlistParser: MongoPlaylistParser }) {
    this.playlistParser = playlistParser;
  }

  async save(playlist: Playlist): Promise<void> {
    playlistsDocuments.push(this.playlistParser.to_database_object(playlist));
  }

  async find(genre: string): Promise<Playlist[]> {
    const playlists: Playlist[] = playlistsDocuments.map((it) =>
      this.playlistParser.to_domain_object(it),
    );
    return playlists.filter((it) => it.genre === genre);
  }
}

export default MongoPlaylistRepository;
