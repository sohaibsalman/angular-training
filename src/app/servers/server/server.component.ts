import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server!: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];

    // retreive query params and fragments
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);

    this.server = this.serversService.getServer(id)!;

    this.route.params.subscribe((params) => {
      this.server = this.serversService.getServer(+params['id'])!;
    });
  }

  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',  // to preserve the query parameters
    });
  }
}
