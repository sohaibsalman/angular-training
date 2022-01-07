import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

/**
 * @NgModule defines a module of angular. We can split our application in multipule modules (if required).
 * - The declarations property tells which components our module is using. 
 * - The imports property tells which other/external modules we are using in our module
 */
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent // Register the custom Server Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]   // tells angualr about which component to bind in index.html
})
export class AppModule { }
