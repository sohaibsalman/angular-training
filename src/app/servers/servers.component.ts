import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
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
  constructor() {}

  ngOnInit(): void {}
}
