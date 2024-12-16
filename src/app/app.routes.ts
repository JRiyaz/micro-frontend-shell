import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { LoginComponent } from './login.component';

export const routes: Routes = [
  {
    path: 'sample',
    title: 'Sample',
    loadComponent: () =>
      import('./sample.component').then((m) => m.SampleComponent),
    // component: SComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user-sample',
    loadComponent: () =>
      loadRemoteModule('user-app', './Sample-Component').then(
        (m) => m.SampleComponent,
      ),
  },
  {
    path: 'user-app',
    loadChildren: () =>
      loadRemoteModule('user-app', './USER-ROUTES').then((m) => m.USER_ROUTES),
  },
];
