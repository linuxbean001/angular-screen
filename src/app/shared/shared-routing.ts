import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';

const routes: Routes = [
  {
    path: '',
    component: SharedComponent,
    children: [
      {
        path: 'uploads',
        loadChildren: '../shared/uploads/uploads.module#UploadsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
