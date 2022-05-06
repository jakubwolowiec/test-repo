import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InqooButtonComponent } from './components/inqoo-button/inqoo-button.component';
import { InqooBadgeComponent } from './components/inqoo-badge/inqoo-badge.component';
import { InqooAccordionItemComponent } from './components/inqoo-accordion-item/inqoo-accordion-item.component';
import { InqooAccordionComponent } from './components/inqoo-accordion/inqoo-accordion.component';
import { InqooClockComponent } from './components/inqoo-clock/inqoo-clock.component';
import { InqooNavbarComponent } from './components/inqoo-navbar/inqoo-navbar.component';
import { ComponentsShowroomPageComponent } from './pages/components-showroom-page/components-showroom-page.component';
import {RouterModule} from "@angular/router";
import { PageNotFoundModule } from '../page-not-found/page-not-found.module';
import { InqooDeckComponent } from '../inqoo-deck/pages/inqoo-deck/inqoo-deck.component';
import { InqooDeckModule } from '../inqoo-deck/inqoo-deck.module';



@NgModule({
  declarations: [
    InqooButtonComponent,
    InqooBadgeComponent,
    InqooAccordionItemComponent,
    InqooAccordionComponent,
    InqooClockComponent,
    InqooNavbarComponent,
    ComponentsShowroomPageComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    PageNotFoundModule,
    InqooDeckModule,
  ],
  exports: [
    InqooButtonComponent,
    InqooBadgeComponent,
    InqooAccordionItemComponent,
    InqooAccordionComponent,
    InqooClockComponent,
    InqooNavbarComponent,
    PageNotFoundModule,
    InqooDeckModule,
  ]
})
export class SharedModule { }
