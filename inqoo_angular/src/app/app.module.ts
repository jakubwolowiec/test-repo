import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import { SwStarshipsModule } from './sw-starships/sw-starships.module';
import { SwPeopleModule } from './sw-people/sw-people.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    SwStarshipsModule,
    SwPeopleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }