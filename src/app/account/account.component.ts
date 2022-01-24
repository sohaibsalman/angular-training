import { Component, Input } from '@angular/core';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [], // The provider tells angular of how to create the object
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;

  // Inject the logging service into the component
  constructor(private accountsService: AccountService) {}

  onSetTo(status: string) {
    // emit the event
    this.accountsService.statusUpdated.emit(status);
    this.accountsService.updateStatus(this.id, status);
  }
}
