import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadsRoutingModule } from './uploads-routing';
import { UploadsComponent } from './uploads.component';

@NgModule({
  imports: [
    CommonModule,
    UploadsRoutingModule
  ],
  declarations: [
    UploadsComponent
  ]
})
export class UploadsModule { }
