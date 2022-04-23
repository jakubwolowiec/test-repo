import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InqooButtonComponent } from './components/inqoo-button/inqoo-button.component';
import { InqooBadgeComponent } from './components/inqoo-badge/inqoo-badge.component';



@NgModule({
  declarations: [
    InqooButtonComponent,
    InqooBadgeComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InqooButtonComponent,
    InqooBadgeComponent
  ]
})
export class SharedModule { }
