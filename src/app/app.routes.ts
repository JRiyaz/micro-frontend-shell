import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { LandingComponent, DashboardLayoutComponent } from 'ui-shared';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Inventory - Smart Inventory Management',
    component: LandingComponent,
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        title: 'Dashboard - Inventory',
        component: DashboardComponent,
      },
    ],
  },
  {
    path: 'user',
    title: 'User Account',
    loadChildren: () =>
      loadRemoteModule('user-service', './USER-ROUTES').then(
        (m) => m.USER_ROUTES,
      ),
  },
];
