import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing';
import { DashboardComponent } from './dashboard.component';
import { DropdownTestComponent } from './dropdown-test/dropdown-test.component';
import { AppCommonModule } from '../../app-common/app-common.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    FormsModule,
    DashboardRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    DashboardComponent,
    DropdownTestComponent,
    ProfileComponent
  ]
})
export class DashboardModule { }
