import DatabaseParser from '../../../shared/infrastructure/persistence/database-parser';
import Playlist from '../../../domain/playlist/playlist';

interface PlaylistDocument {
  _id: string;
  createdAt: Date;
  name: string;
  favorite: boolean;
  genre: string;
}

class MongoPlaylistParser implements DatabaseParser {
  to_database_object(entity: Playlist): PlaylistDocument {
    return {
      _id: entity.id,
      createdAt: entity.createdAt,
      name: entity.name,
      favorite: entity.favorite,
      genre: entity.genre,
    };
  }

  to_domain_object(data: PlaylistDocument): Playlist {
    return Playlist.build({
      id: data['_id'],
      createdAt: data['createdAt'],
      name: data['name'],
      favorite: data['favorite'],
      genre: data['genre'],
    });
  }
}

export default MongoPlaylistParser;
