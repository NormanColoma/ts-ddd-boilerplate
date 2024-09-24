import Playlist from 'src/domain/playlist/playlist';
import PlaylistRepository from '../../../domain/playlist/playlist-repository';
import { Inject } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import MongoPlaylistParser from './mongo-parser';

const playlistsDocuments: object[] = [
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
    @Inject('MongoPlaylistParser')
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
