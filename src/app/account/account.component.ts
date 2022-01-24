import { Component, EventEmitter, Input, Output } from '@angular/core';

import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService], // The provider tells angular of how to create the object
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;
  @Output() statusChanged = new EventEmitter<{
    id: number;
    newStatus: string;
  }>();

  // Inject the logging service into the component
  constructor(private loggingService: LoggingService) {}

  onSetTo(status: string) {
    this.statusChanged.emit({ id: this.id, newStatus: status });
    // use the injected service
    this.loggingService.logStatusChange(status);
  }
}
