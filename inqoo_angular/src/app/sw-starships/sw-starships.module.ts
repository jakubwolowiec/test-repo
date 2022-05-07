import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwStarshipsPageComponent } from './pages/sw-starships-page/sw-starships-page.component';
import { StarshipComponent } from './components/starship/starship.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    SwStarshipsPageComponent,
    StarshipComponent,
    
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class SwStarshipsModule { }
