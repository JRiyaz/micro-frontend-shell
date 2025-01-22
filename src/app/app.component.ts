import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedUiService } from 'shared-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
  styles: [],
})
export class AppComponent {
  uisharedService: SharedUiService = inject(SharedUiService);

  title = 'shell';

  ngOnInit() {
    this.uisharedService.setVar(66);
  }
}
