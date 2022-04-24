import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InqooButtonComponent } from './components/inqoo-button/inqoo-button.component';
import { InqooBadgeComponent } from './components/inqoo-badge/inqoo-badge.component';
import { InqooAccordionItemComponent } from './components/inqoo-accordion-item/inqoo-accordion-item.component';
import { InqooAccordionComponent } from './components/inqoo-accordion/inqoo-accordion.component';
import { InqooNavbarComponent } from './components/inqoo-navbar/inqoo-navbar.component';
import { InqooClockComponent } from './components/inqoo-clock/inqoo-clock.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InqooButtonComponent,
    InqooBadgeComponent,
    InqooAccordionItemComponent,
    InqooAccordionComponent,
    InqooNavbarComponent,
    InqooClockComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    InqooButtonComponent,
    InqooBadgeComponent,
    InqooAccordionItemComponent,
    InqooAccordionComponent,
    InqooNavbarComponent,
    InqooClockComponent,
    RouterModule
  ]
})
export class SharedModule { }
