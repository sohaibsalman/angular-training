/**
 * A service is a simple typescript class that contains the code or data
 * need to be centralized. A service is injected into the component or
 * directive by using angular's dependency injection
 */
export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
