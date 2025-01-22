import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopNavComponent } from './top-nav.component';
import { SideNavComponent } from './side-nave.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, TopNavComponent, SideNavComponent],
  template: `
    <div class="min-h-screen bg-gray-100">
      <top-nav
        [class.hidden]="hideNav"
        [class.animate-slideDown]="showNav"
      ></top-nav>

      <side-nav />

      <main class="lg:pl-64 pt-16">
        <div class="px-4 py-6 sm:px-6 lg:px-8">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `,
})
export default class MainLayoutComponent {
  private lastScrollPosition = 0;
  hideNav = false;
  showNav = true;

  @HostListener('window:scroll')
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset;

    if (
      currentScrollPosition > this.lastScrollPosition &&
      currentScrollPosition > 100
    ) {
      this.hideNav = true;
      this.showNav = false;
    } else {
      this.hideNav = false;
      this.showNav = true;
    }

    this.lastScrollPosition = currentScrollPosition;
  }
}
