import { IsNotEmpty } from 'class-validator';

export class CreatePlaylistRequest {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  genre: string;
}
