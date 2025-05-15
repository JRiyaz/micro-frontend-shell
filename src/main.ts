import { initFederation } from '@angular-architects/native-federation';
import { environment } from './environments/environment';

const FEDERATION_PATHS = {
  devManifest: '/federation.manifest.json',
  prodManifest: `${environment.SHELL_PATH}/federation.manifest.prod.json`,
  devEnv: '/env.json',
  prodEnv: `${environment.SHELL_PATH}/env.prod.json`,
};

async function getManifest() {
  const { prodEnv, prodManifest, devEnv, devManifest } = FEDERATION_PATHS;
  const targetEnv = environment.production ? prodEnv : devEnv;
  const fallbackManifest = environment.production ? prodManifest : devManifest;

  try {
    const response = await fetch(targetEnv);
    return response.ok ? targetEnv : fallbackManifest;
  } catch {
    return fallbackManifest;
  }
}

getManifest()
  .then((manifest) => initFederation(manifest))
  .catch((err) => console.error(err))
  .then((_) => import(/* @vite-ignore */ './bootstrap'))
  .catch((err) => console.error(err));
