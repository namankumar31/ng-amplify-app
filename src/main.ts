import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';

import { AppModule } from './app/app.module';
import { SumerianModule } from './components/sumerian/sumerian.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(SumerianModule)
  .catch((err) => console.error(err));

Amplify.configure(awsmobile);
