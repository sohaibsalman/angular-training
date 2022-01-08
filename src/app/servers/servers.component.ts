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
  constructor() {}

  ngOnInit(): void {}
}
