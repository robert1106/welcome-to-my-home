import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'; // Todo

import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TabsModule } from "ngx-bootstrap/tabs";

import { AppRoutingModule } from './app-routing.module';

import { AboutComponent } from './about/about.component';
import { AboutInspirationComponent } from './about-inspiration/about-inspiration.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { BlogBoxComponent } from './blog-box/blog-box.component';
import { BlogComponent } from './blog/blog.component';
import { BlogQuoteComponent } from './blog-quote/blog-quote.component';
import { BlogVideoComponent } from './blog-video/blog-video.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactComponent } from './contact/contact.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DecorMainComponent } from './decor-main/decor-main.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryMainComponent } from './gallery-main/gallery-main.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MapContactComponent } from './map-contact/map-contact.component';
import { ModalsComponent } from './modals/modals.component';
import { PartnersComponent } from './partners/partners.component';
import { PostCarouselComponent } from "./post-carousel/post-carousel.component";
import { PostsComponent } from './posts/posts.component';
import { TopMainComponent } from './top-main/top-main.component';
import { WorksMainComponent } from './works-main/works-main.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AboutComponent,
    AboutInspirationComponent,
    AboutUsComponent,
    AppComponent,
    AsideComponent,
    BlogBoxComponent,
    BlogComponent,
    BlogQuoteComponent,
    BlogVideoComponent,
    BreadcrumbsComponent,
    CarouselComponent,
    ContactComponent,
    ContactusComponent,
    DecorMainComponent,
    FooterComponent,
    GalleryComponent,
    GalleryMainComponent,
    HeaderComponent,
    HomeComponent,
    MapContactComponent,
    ModalsComponent,
    PartnersComponent,
    PostCarouselComponent,
    PostsComponent,
    TopMainComponent,
    WorksMainComponent,
    PostComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CarouselModule.forRoot(),
    CommonModule,
    ModalModule.forRoot(),
    NgbAlertModule,
    NgbModule,
    NgbPaginationModule,
    PaginationModule.forRoot(),
    TabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
