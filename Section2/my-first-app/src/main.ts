import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//when the application first spins up this is the first page that is read. It then bootstraps the app.module.ts
//with the reference to 'AppModule' Go to app.module.ts to continue with what happens during start-up
platformBrowserDynamic().bootstrapModule(AppModule) 
  .catch(err => console.error(err));
