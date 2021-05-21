import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
