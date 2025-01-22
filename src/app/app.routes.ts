import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { authGuard, loginGuard } from 'shared-ui';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'login',
    // component: LoginComponent
    loadComponent: () => import('shared-ui').then((m) => m.LoginComponent),
    canActivate: [loginGuard()],
  },
  {
    path: 'auth/sign-in',
    loadComponent: () =>
      import('./pages/sign-in.component').then((m) => m.SignInComponent),
    title: 'Sign In',
  },
  {
    path: 'auth/sign-up',
    loadComponent: () =>
      import('./pages/sign-up.component').then((m) => m.SignUpComponent),
    title: 'Sign Up',
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./pages/orders.component').then((m) => m.OrdersComponent),
    title: 'Orders',
  },
  {
    path: '',
    loadComponent: () => import('./layout/dashboard.component'),
    canActivate: [authGuard()],
    // component: DashboardComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home.component'),
      },
      {
        path: 'sample',
        title: 'Sample',
        loadComponent: () =>
          import('./sample.component').then((m) => m.SampleComponent),
      },
      {
        path: 'user-sample',
        loadComponent: () => loadRemoteModule('user-app', './Sample-Component'),
      },
      {
        path: 'user-app',
        loadChildren: () =>
          loadRemoteModule('user-app', './USER-ROUTES').then(
            (m) => m.USER_ROUTES,
          ),
      },
    ],
  },
  {
    path: 'new-board',
    loadComponent: () => import('./layout/main-layout.component'),
    // component: DashboardComponent,
    children: [
      {
        path: 'profile',
        title: 'User Profile',
        loadComponent: () =>
          import('./pages/profile.component').then((m) => m.ProfileComponent),
      },
      {
        path: 'about',
        title: 'About',
        loadComponent: () =>
          import('./pages/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/products.component').then((m) => m.ProductsComponent),
        title: 'Products',
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./pages/orders.component').then((m) => m.OrdersComponent),
        title: 'Orders',
      },
    ],
  },
];
