/**
 * Main and first file that gets executed by index.html. It imports app module and 
 * call the bootstrap method which tells angular that app module is the root component
 * and renders it.
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Bootstrap (Bind) the app module with angular to render the app module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
