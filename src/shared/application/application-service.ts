import ApplicationCommand from './application-command';
import ApplicationResponse from './application-response';

interface ApplicationService {
  execute(command: ApplicationCommand): Promise<ApplicationResponse> | Promise<void>;
}

export default ApplicationService;
