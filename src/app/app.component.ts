import { Component } from '@angular/core';

/**
 * A component is just a simple javascript/typescript class with a @Component declarator.
 * 
 * @Component is a special declarator for a class which makes it an angular component.
 * We pass a javascript object to @Component decelarator that defines the meta-data for the class.
 */
@Component({
  selector: 'app-root', // Represents the name of the custom HTML tag to render this component
  templateUrl: './app.component.html',  // Represents the path where the template for this component is defined
  styleUrls: ['./app.component.css']  // Represents the path for the styles of the component
})
export class AppComponent {
}
