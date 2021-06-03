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
import { DecorMainComponent } from './decor-main/decor-main.component';
import { WorksMainComponent } from './works-main/works-main.component';
import { GalleryMainComponent } from './gallery-main/gallery-main.component';
import { TabsModule } from "ngx-bootstrap/tabs";
import { BlogBoxComponent } from './blog-box/blog-box.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AboutInspirationComponent } from './about-inspiration/about-inspiration.component';
import { PartnersComponent } from './partners/partners.component';
import { MapContactComponent } from './map-contact/map-contact.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ModalsComponent,
    TopMainComponent,
    NewcollectionMainComponent,
    DecorMainComponent,
    WorksMainComponent,
    GalleryMainComponent,
    BlogBoxComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    GalleryComponent,
    AboutUsComponent,
    BreadcrumbsComponent,
    AboutInspirationComponent,
    PartnersComponent,
    MapContactComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
