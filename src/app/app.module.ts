import {CommonModule} from "@angular/common";

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';

import { FooterComponent } from './footer/footer.component';
import { ModalsComponent } from './modals/modals.component';
import { TopMainComponent } from './top-main/top-main.component';
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from 'ngx-bootstrap/modal';
import { NewcollectionMainComponent } from './newcollection-main/newcollection-main.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ModalsComponent,
    TopMainComponent,
    NewcollectionMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
