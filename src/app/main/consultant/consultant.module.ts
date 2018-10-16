import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultantComponent } from './consultant.component';
import { MatCardModule, MatButtonModule, MatDividerModule, MatIconModule, MatExpansionModule, MatToolbarModule } from '@angular/material';
import { ConsultantingModule } from './consultant-routing';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    ConsultantingModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    MatToolbarModule,
    FormsModule
  ],
  declarations: [
    ConsultantComponent
  ]
})
export class ConsultantModule { }
