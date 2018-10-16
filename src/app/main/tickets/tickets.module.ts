import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketsRoutingModule } from './tickets-routing';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatSelectModule
} from '@angular/material';
import { TicketComponent } from './ticket/ticket.component';
import { AppCommonModule } from '../../app-common/app-common.module';
import { FormsModule } from '@angular/forms';
import { TicketCreateDialogComponent } from './ticket-create-dialog/ticket-create-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    FormsModule,
    TicketsRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule
  ],
  declarations: [
    TicketsComponent,
    TicketComponent,
    TicketCreateDialogComponent
  ],
  entryComponents: [
    TicketCreateDialogComponent
  ]
})
export class TicketsModule { }
