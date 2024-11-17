import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from "@angular/core";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { provideRouter } from "@angular/router";

import { httpInterceptorProviders } from "shared-ui";

import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    ...httpInterceptorProviders,
  ],
};
