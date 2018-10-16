import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AppCommonModule } from '../app-common/app-common.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LandingRoutingModule,
    AppCommonModule
  ],
  declarations: [
    LandingComponent,
    HomeComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SetPasswordComponent,
    HeaderComponent
  ]
})
export class LandingModule { }
