import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {
    path: '',
    component: TicketsComponent
  },
  {
    path: 'ticket/:ticketId',
    component: TicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
