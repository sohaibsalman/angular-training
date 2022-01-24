import { Component, Input } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService], // The provider tells angular of how to create the object
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;

  // Inject the logging service into the component
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountService
  ) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // use the injected service
    this.loggingService.logStatusChange(status);
  }
}
