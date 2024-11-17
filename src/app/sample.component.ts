import { Component } from "@angular/core";

@Component({
  selector: "app-sample",
  standalone: true,
  imports: [],
  template: `
    <ul class="list-group m-3">
      <li class="list-group-item">An item</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
      <li class="list-group-item">A fourth item</li>
      <li class="list-group-item">And a fifth one</li>
    </ul>
  `,
  styles: ``,
})
export class SampleComponent {}
