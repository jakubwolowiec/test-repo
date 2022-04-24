import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InqooErrorpageComponent } from './error-page/inqoo-errorpage/inqoo-errorpage.component';
import { InqooHomepageComponent } from './home-page/inqoo-homepage/inqoo-homepage.component';
import { SwPeoplePageComponent } from './sw-people/pages/sw-people-page/sw-people-page.component';
import { SwStarshipsPageComponent } from './sw-starships/pages/sw-starships-page/sw-starships-page.component';

const enum RoutesConfig{
  home = '/home',
  swStarships = 'sw-starships',
  swPeople = 'sw-people',
  error = '**'
}

const routes: Routes = [
  {path: RoutesConfig.swStarships, component: SwStarshipsPageComponent},
  {path: RoutesConfig.swPeople, component: SwPeoplePageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: RoutesConfig.home, component:InqooHomepageComponent},
  {path: RoutesConfig.error, component: InqooErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
