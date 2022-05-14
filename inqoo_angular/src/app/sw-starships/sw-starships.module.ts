import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwStarshipsPageComponent } from './pages/sw-starships-page/sw-starships-page.component';
import { StarshipComponent } from './components/starship/starship.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    SwStarshipsPageComponent,
    StarshipComponent,
    StarshipsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SwStarshipsModule { }
