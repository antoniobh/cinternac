import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatSnackBarModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
// import { CommonDirectivesModule } from '../../directives/common/common-directives.module';
import { SharedModule } from '../shared/shared.module';
import { ViewsRoutes } from "./views.routing";

import { IntroComponent } from './HomePage/intro/intro.component';
import { HomeComponent } from './HomePage/home.component';
import { ProductsComponent } from './ProductsPage/products.component';
    import { OriginsModalComponent } from './ProductsPage/OriginsModal/originsModal.component';
import { GalleryComponent } from './GalleryPage/gallery.component';
import { GalleryGridComponent } from './GalleryPage/GalleryGrid/galleryGrid.component';

import { ContactComponent } from './ContactPage/contact.component';
import { ContactFormComponent } from './ContactPage/ContactForm/contactForm.component';
import { AboutComponent } from './Company/AboutPage/about.component';
import { PoliticsComponent } from './Company/PoliticsPage/politics.component';


import { WINDOW_PROVIDERS } from '../shared/helpers/window.helper';

import {
  HeaderComponent,
  FooterComponent,
  CtaComponent
}from './../core';


//Translate
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


      // Export del translate
      export function createTranslateLoader(http: HttpClient) {
        return new TranslateHttpLoader(http, './assets/i18n/', '.json');
      }


@NgModule({
  imports: [

    //Translate Imports
    HttpClientModule,
    TranslateModule
    .forRoot({
              loader: {
                  provide: TranslateLoader,
                  useFactory: createTranslateLoader,
                  deps: [HttpClient]
                      }
            }),


    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    FlexLayoutModule,
    NguCarouselModule,
    RouterModule.forChild(ViewsRoutes)
  ],
  declarations: [
    IntroComponent,
    HomeComponent,
    ProductsComponent,
        OriginsModalComponent,
    GalleryComponent,
    GalleryGridComponent,
    ContactComponent,
    ContactFormComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    PoliticsComponent,
    CtaComponent
  ],
  providers: [WINDOW_PROVIDERS]

})
export class ViewModule { }
