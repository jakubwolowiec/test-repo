import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InqooButtonComponent } from './components/inqoo-button/inqoo-button.component';
import { InqooBadgeComponent } from './components/inqoo-badge/inqoo-badge.component';
import { InqooAccordionItemComponent } from './components/inqoo-accordion-item/inqoo-accordion-item.component';
import { InqooAccordionComponent } from './components/inqoo-accordion/inqoo-accordion.component';
import { InqooNavbarComponent } from './components/inqoo-navbar/inqoo-navbar.component';



@NgModule({
  declarations: [
    InqooButtonComponent,
    InqooBadgeComponent,
    InqooAccordionItemComponent,
    InqooAccordionComponent,
    InqooNavbarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InqooButtonComponent,
    InqooBadgeComponent,
    InqooAccordionItemComponent,
    InqooAccordionComponent,
    InqooNavbarComponent
  ]
})
export class SharedModule { }
