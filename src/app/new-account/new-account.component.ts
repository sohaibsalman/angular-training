import { Component } from '@angular/core';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [], // The provider tells angular of how to create the object
})
export class NewAccountComponent {
  // Inject the logging service into the component
  constructor(private accountsService: AccountService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
