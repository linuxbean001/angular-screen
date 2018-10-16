import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing';
import { AdminComponent } from './admin.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamComponent } from './team/team.component';
import { AppCommonModule } from '../../app-common/app-common.module';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { SelectUserComponent } from './team/select-user/select-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppCommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  declarations: [
    AdminComponent,
    TeamsComponent,
    TeamComponent,
    SelectUserComponent
  ],
  entryComponents: [
    SelectUserComponent
  ]
})
export class AdminModule { }
