import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // Inject the router object
  constructor(private router: Router) {}

  ngOnInit() {}

  handleLoadServers() {
    // Use navigate function to navigate to the component programmatically
    this.router.navigate(['/servers']);
  }
}
