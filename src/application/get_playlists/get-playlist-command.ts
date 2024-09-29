import ApplicationCommand from '../../shared/application/application-command';

interface GetPlaylistCommand extends ApplicationCommand {
  genre: string;
}

export default GetPlaylistCommand;

