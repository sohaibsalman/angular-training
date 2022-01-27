import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private activeRoute: ActivatedRoute // to get the active route
  ) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  handlePageReload() {
    // navigate function accepts an object that in which we can specify
    // the relative path
    this.router.navigate(['servers'], { relativeTo: this.activeRoute });
  }
}
