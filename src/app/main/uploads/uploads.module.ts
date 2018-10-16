import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadsRoutingModule } from './uploads-routing';
import { UploadsComponent } from './uploads.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatDividerModule, MatIconModule, MatExpansionModule, MatToolbarModule } from '@angular/material';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    UploadsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    MatToolbarModule
  ],
  declarations: [
    UploadsComponent
  ]
})
export class UploadsModule { }
