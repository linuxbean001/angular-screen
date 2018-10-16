import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ApiClientService } from './api-client';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { UserService } from './user.service';
import { TinyMceComponent } from './tiny-mce/tiny-mce.component';
import { UserSessionService } from './user-session.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    SpinnerComponent,
    TinyMceComponent
  ],
  declarations: [
    SpinnerComponent,
    TinyMceComponent
  ]
})
export class AppCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppCommonModule,
      providers: [
        ApiClientService,
        UserService,
        UserSessionService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
      ]
    };
  }
}
