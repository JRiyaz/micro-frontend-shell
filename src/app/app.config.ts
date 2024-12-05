import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideRouter } from '@angular/router';
// import { APP_BASE_HREF } from "@angular/common";

import { httpInterceptorProviders } from 'shared-ui';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // {provide: APP_BASE_HREF, useValue: "/shell/"},
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    ...httpInterceptorProviders,
  ],
};
