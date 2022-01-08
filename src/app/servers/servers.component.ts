import { Component, OnInit } from '@angular/core';

@Component({
  /**
   * selector property can be used as element selector, attribute selector, class selector
   * - for element selector, we simply write the name of the element e.g 'app-servers'
   * - for attribute selector, we use []: e.g. '[app-servers]'
   * - for class selector, we use . e.g. '.app-servers'
   */
  selector: 'app-servers',
  //  selector: '[app-servers]',
  //  selector: '.app-servers',

  templateUrl: './servers.component.html',

  /**
   * template property can be used to define inline template (without using external template file)
   */
  template: `<app-server></app-server> <app-server></app-server>`,

  styleUrls: ['./servers.component.css'],

  /**
   * style property can be used to define inline styles (without using external styles file)
   */
  styles: [
    `
      h2 {
        color: red;
      }
    `,
  ],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No new server was created';
  serverName = '';
  isServerCreated = false;
  servers = ['Test Server 1', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'A new server was created. Server name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
