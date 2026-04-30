import {
  NotificationToastComponent,
  NotificationSidenavComponent,
  NotificationService,
  LoadingComponent,
} from 'ui-shared';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NotificationToastComponent,
    NotificationSidenavComponent,
    LoadingComponent,
  ],
  template: `
    <router-outlet />

    <!-- Global Layers -->
    <ui-loading />
    <ui-notification-toast />
    @if (notificationService.sidenavOpen()) {
      <ui-notification-sidenav
        (close)="notificationService.sidenavOpen.set(false)"
      />
    }
  `,
  styles: [],
})
export class AppComponent {
  title = 'shell';
  notificationService = inject(NotificationService);
}
