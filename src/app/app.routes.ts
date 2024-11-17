import { Routes } from "@angular/router";
import { loadRemoteModule } from "@angular-architects/native-federation";
import { SampleComponent } from "./sample.component";

export const routes: Routes = [
  {
    path: "sample",
    title: "Sample",
    component: SampleComponent,
  },
  {
    path: "user-sample",
    title: "Sample Component",
    loadComponent: () =>
      loadRemoteModule("user-app", "./Sample-Component").then(
        (m) => m.SampleComponent,
      ),
  },
  {
    path: "user-app",
    title: "User App",
    loadChildren: () =>
      loadRemoteModule("user-app", "./USER-ROUTES").then((m) => m.USER_ROUTES),
  },
];
