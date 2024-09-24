import PlaylistCreatedEvent from './events/playlist-created';
import AggregateRoot from '../../shared/domain/aggregate-root';

class Playlist extends AggregateRoot {
  private _name: string;
  private _favorite: boolean;
  private _genre: string;

  private constructor({
    name,
    favorite = false,
    genre,
  }: {
    name: string;
    favorite?: boolean;
    genre: string;
  }) {
    super();
    this.name = name;
    this.favorite = favorite;
    this.genre = genre;
  }

  public static create({
    name,
    favorite,
    genre,
  }: {
    name: string;
    favorite?: boolean;
    genre: string;
  }): Playlist {
    const playlist = new Playlist({ name, favorite, genre });
    playlist.addEvent(PlaylistCreatedEvent.create(playlist));
    return playlist;
  }

  public static build({
    id,
    name,
    favorite,
    genre,
    createdAt,
  }: {
    id: string;
    name: string;
    favorite?: boolean;
    genre: string;
    createdAt: Date;
  }): Playlist {
    const playlist = new Playlist({ name, favorite, genre });
    playlist.id = id;
    playlist.createdAt = createdAt;

    return playlist;
  }

  public get name(): string {
    return this._name;
  }

  private set name(name: string) {
    this._name = name;
  }

  public get favorite(): boolean {
    return this._favorite;
  }

  private set favorite(favorite: boolean) {
    this._favorite = favorite;
  }

  public get genre(): string {
    return this._genre;
  }

  private set genre(genre: string) {
    this._genre = genre;
  }

  public toPrimitives(): object {
    return {
      ...super.toPrimitives(),
      name: this.name,
      favorite: this.favorite,
      genre: this.genre,
    };
  }
}

export default Playlist;
