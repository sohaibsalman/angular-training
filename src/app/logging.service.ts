import { Injectable } from '@angular/core';

/**
 * A service is a simple typescript class that contains the code or data
 * need to be centralized. A service is injected into the component or
 * directive by using angular's dependency injection
 */

// The @Injectable decorator allows services to be injected in a service
@Injectable()
export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
