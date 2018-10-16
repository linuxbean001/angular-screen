import { RouterModule, Routes } from '@angular/router';
import { UploadsComponent } from './uploads.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: UploadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadsRoutingModule { }
