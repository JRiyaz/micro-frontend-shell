import {
  NotificationToastComponent,
  NotificationSidenavComponent,
  NotificationService,
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
  ],
  template: `
    <router-outlet />

    <!-- Global Notifications Layer -->
    <ui-notification-toast />
    <ui-notification-sidenav
      *ngIf="notificationService.sidenavOpen()"
      (close)="notificationService.sidenavOpen.set(false)"
    />
  `,
  styles: [],
})
export class AppComponent {
  title = 'shell';
  notificationService = inject(NotificationService);
}
