import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing';
import { AppCommonModule } from './app-common/app-common.module';
import { ApplicationConfiguration } from './app-common/application-configuration';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
declare const applicationConfiguration: ApplicationConfiguration;


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppCommonModule.forRoot()
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: applicationConfiguration.baseHref || '/'
    },
    {
      provide: 'domain',
      useValue: applicationConfiguration.backendUrl || '/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
