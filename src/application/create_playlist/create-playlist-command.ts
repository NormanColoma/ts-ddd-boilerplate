import ApplicationCommand from '../../shared/application/application-command';

interface CreatePlaylistCommand extends ApplicationCommand {
  name: string;
  genre: string;
}

export default CreatePlaylistCommand;
