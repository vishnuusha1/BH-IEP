import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// Kendo modules
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { MockApiInterceptor } from './core/interceptors/project.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()), // Required to use interceptors from DI
    provideAnimations(),

    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      InputsModule,
      LabelModule,
      LayoutModule,
      ButtonsModule
    ),

    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockApiInterceptor,
      multi: true
    }
  ]
};
