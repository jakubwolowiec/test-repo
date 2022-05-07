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
import { InqooDateComponent } from './components/inqoo-date/inqoo-date.component';
import { InqooUpAndLowPipe } from './pipes/inqoo-up-and-low.pipe';
import { InqooClockV2Component } from './components/inqoo-clock-v2/inqoo-clock-v2.component';
import { InqooLoaderComponent } from './components/inqoo-loader/inqoo-loader.component';
import { InqooSearchBarComponent } from './components/inqoo-search-bar/inqoo-search-bar.component';



@NgModule({
  declarations: [
    InqooButtonComponent,
    InqooBadgeComponent,
    InqooAccordionItemComponent,
    InqooAccordionComponent,
    InqooClockComponent,
    InqooNavbarComponent,
    ComponentsShowroomPageComponent,
    InqooDateComponent,
    InqooUpAndLowPipe,
    InqooClockV2Component,
    InqooLoaderComponent,
    InqooSearchBarComponent,
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
    InqooClockComponent,
    InqooNavbarComponent,
    InqooLoaderComponent,
    InqooSearchBarComponent
  ]
})
export class SharedModule { }
