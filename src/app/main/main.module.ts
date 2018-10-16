import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing';
import { HeaderComponent } from './header/header.component';
import { AppCommonModule } from '../app-common/app-common.module';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    MainRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  declarations: [MainComponent, HeaderComponent]
})
export class MainModule { }
