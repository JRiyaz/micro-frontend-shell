import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb.component';

@Component({
  selector: 'top-nav',
  imports: [CommonModule, RouterModule, BreadcrumbComponent],
  template: `
    <header class="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm">
      <div class="h-16 lg:pl-64">
        <div class="flex h-full items-center justify-end px-4 sm:px-6 lg:px-8">
          <breadcrumb class="mr-auto" />
          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <button
              (click)="toggleDropdown()"
              class="flex items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <img
                class="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User profile"
              />
            </button>

            <div
              *ngIf="isDropdownOpen"
              class="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5"
            >
              <a
                routerLink="/profile"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Your Profile</a
              >
              <a
                routerLink="/auth/sign-in"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Sign In</a
              >
              <a
                routerLink="/auth/sign-up"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Sign Up</a
              >
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
})
export class TopNavComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
