import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user!: { id: number; name: string };

  // Inject the ActivatedRoute to get the current route
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'], // get the id from route parameter
      name: this.route.snapshot.params['name'], // get the name from route parameter
    };

    /**
     * Example for reacting to parameters change in the component.
     *
     * If a component is re-navigated again from the component itself, angular will not
     * call the ngOnit to initialize th component again. So, in order to update the data of
     * the component rendered by re-navigating the component again, we need to listen
     * to the observer.
     *
     * Note - if you are 100% sure that the component will not reloaded from within the component,
     * then we don't need to subscribe. In all other cases, make sure to implement this in ngOnInit
     * */
    this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }
}
