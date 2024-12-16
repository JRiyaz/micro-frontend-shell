import { initFederation } from '@angular-architects/native-federation';
import { environment } from './environments/environment';

let FEDERATION_PATH = '/federation.manifest.json';
if (environment.production) {
  FEDERATION_PATH = `${environment.SHELL_PATH}/federation.manifest.prod.json`;
}

initFederation(FEDERATION_PATH)
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
