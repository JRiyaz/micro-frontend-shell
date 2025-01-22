import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'side-nav',
  imports: [CommonModule, RouterModule],
  template: `
    <div
      class="fixed inset-y-0 left-0 z-50 transition-all duration-300 ease-in-out"
      [class.w-64]="!isCollapsed"
      [class.w-16]="isCollapsed"
    >
      <div class="h-full bg-[#1a1f37] text-white flex flex-col">
        <!-- Toggle Button -->
        <button
          (click)="toggleNav()"
          class="absolute -right-3 top-8 bg-indigo-600 rounded-full p-1 hover:bg-indigo-700 z-50"
        >
          <svg
            [class.rotate-180]="isCollapsed"
            class="w-4 h-4 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <!-- Logo/Brand -->
        <div class="h-16 flex items-center px-4">
          <span [class.hidden]="isCollapsed" class="text-xl font-semibold"
            >Admin Panel</span
          >
        </div>

        <!-- Navigation Items -->
        <nav class="flex-1 px-2 py-4 space-y-2">
          <a
            routerLink="/new-board/dashboard"
            routerLinkActive="bg-indigo-600"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-indigo-600 transition-colors group"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span
              [class.hidden]="isCollapsed"
              class="transition-opacity"
              [class.opacity-0]="isCollapsed"
              >Dashboard</span
            >
            <span
              *ngIf="isCollapsed"
              class="absolute left-full ml-2 px-2 py-1 bg-gray-800 rounded-md text-sm invisible group-hover:visible"
            >
              Dashboard
            </span>
          </a>

          <a
            routerLink="/new-board/products"
            routerLinkActive="bg-indigo-600"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-indigo-600 transition-colors group"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <span
              [class.hidden]="isCollapsed"
              class="transition-opacity"
              [class.opacity-0]="isCollapsed"
              >Products</span
            >
            <span
              *ngIf="isCollapsed"
              class="absolute left-full ml-2 px-2 py-1 bg-gray-800 rounded-md text-sm invisible group-hover:visible"
            >
              Products
            </span>
          </a>

          <a
            routerLink="/new-board/orders"
            routerLinkActive="bg-indigo-600"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-indigo-600 transition-colors group"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span
              [class.hidden]="isCollapsed"
              class="transition-opacity"
              [class.opacity-0]="isCollapsed"
              >Orders</span
            >
            <span
              *ngIf="isCollapsed"
              class="absolute left-full ml-2 px-2 py-1 bg-gray-800 rounded-md text-sm invisible group-hover:visible"
            >
              Orders
            </span>
          </a>

          <a
            routerLink="/new-board/profile"
            routerLinkActive="bg-indigo-600"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-indigo-600 transition-colors group"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span
              [class.hidden]="isCollapsed"
              class="transition-opacity"
              [class.opacity-0]="isCollapsed"
              >Profile</span
            >
            <span
              *ngIf="isCollapsed"
              class="absolute left-full ml-2 px-2 py-1 bg-gray-800 rounded-md text-sm invisible group-hover:visible"
            >
              Profile
            </span>
          </a>

          <a
            routerLink="/auth/sign-in"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-indigo-600 transition-colors group"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span
              [class.hidden]="isCollapsed"
              class="transition-opacity"
              [class.opacity-0]="isCollapsed"
              >Logout</span
            >
            <span
              *ngIf="isCollapsed"
              class="absolute left-full ml-2 px-2 py-1 bg-gray-800 rounded-md text-sm invisible group-hover:visible"
            >
              Logout
            </span>
          </a>
        </nav>
      </div>
    </div>
  `,
})
export class SideNavComponent {
  isCollapsed = false;

  toggleNav() {
    this.isCollapsed = !this.isCollapsed;
  }
}
