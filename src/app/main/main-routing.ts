import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
      },
      {
        path: 'customers',
        loadChildren: './customers/customers.module#CustomersModule'
      },
      {
        path: 'tickets',
        loadChildren: './tickets/tickets.module#TicketsModule'
      },
      {
        path: 'uploads',
        loadChildren: '../main/uploads/uploads.module#UploadsModule'
      },
      {
        path: 'consultant',
        loadChildren: '../main/consultant/consultant.module#ConsultantModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
