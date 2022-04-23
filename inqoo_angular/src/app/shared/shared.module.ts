import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InqooButtonComponent } from './components/inqoo-button/inqoo-button.component';



@NgModule({
  declarations: [
    InqooButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InqooButtonComponent
  ]
})
export class SharedModule { }
