import ApplicationCommand from './application-command';
import ApplicationResponse from './application-response';

interface ApplicationService {
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  execute(command: ApplicationCommand): Promise<ApplicationResponse> | void;
}

export default ApplicationService;
