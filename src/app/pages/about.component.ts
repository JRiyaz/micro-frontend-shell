import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  template: `
    <div class="bg-white shadow rounded-lg p-6">
      <h1 class="text-2xl font-bold mb-4">About</h1>
      <div class="space-y-4">
        <p class="text-gray-600">
          Welcome to our admin dashboard! This application is built with Angular
          and features a modern, responsive design using Tailwind CSS.
        </p>
        <div class="border-t pt-4">
          <h2 class="text-xl font-semibold mb-2">Features</h2>
          <ul class="list-disc list-inside space-y-2 text-gray-600">
            <li>Responsive layout</li>
            <li>Authentication system</li>
            <li>Product management</li>
            <li>Order tracking</li>
            <li>User profile management</li>
          </ul>
        </div>
        <div class="border-t pt-4">
          <h2 class="text-xl font-semibold mb-2">Version</h2>
          <p class="text-gray-600">1.0.0</p>
        </div>
      </div>
    </div>
  `,
})
export class AboutComponent {}
