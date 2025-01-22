import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface BreadcrumbItem {
  label: string;
  url: string;
  isLast: boolean;
}

@Component({
  selector: 'breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <ol class="flex items-center space-x-2 text-sm">
        <li>
          <a routerLink="/" class="text-gray-500 hover:text-gray-700">Home</a>
        </li>

        <li *ngFor="let item of breadcrumbs">
          <div class="flex items-center">
            <svg
              class="w-4 h-4 text-gray-400 mx-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <a
              [routerLink]="item.url"
              [class.text-gray-500]="!item.isLast"
              [class.hover:text-gray-700]="!item.isLast"
              [class.text-gray-900]="item.isLast"
              [class.font-medium]="item.isLast"
            >
              {{ item.label }}
            </a>
          </div>
        </li>
      </ol>
    </nav>
  `,
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: BreadcrumbItem[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.generateBreadcrumbs();
      });

    // Generate initial breadcrumbs
    this.generateBreadcrumbs();
  }

  private generateBreadcrumbs() {
    const paths = this.router.url.split('/').filter((path) => path); // Remove empty strings

    this.breadcrumbs = paths.map((path, index) => {
      const url = '/' + paths.slice(0, index + 1).join('/');
      const label = this.formatLabel(path);
      const isLast = index === paths.length - 1;

      return { label, url, isLast };
    });
  }

  private formatLabel(path: string): string {
    // Capitalize first letter and replace hyphens with spaces
    return path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
  }
}
