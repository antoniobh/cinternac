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

  // Frutas
    import { ApplesModalComponent } from './ProductsPage/Origins/ApplesModal/applesModal.component';
 //    import { GrapesModalComponent } from './ProductsPage/Origins/GrapesModal/grapesModal.component';
 //    import { PearsModalComponent } from './ProductsPage/Origins/PearsModal/pearsModal.component';
 //    import { TangerinesModalComponent } from './ProductsPage/Origins/TangerinesModal/tangerinesModal.component';
 //    import { OrangesModalComponent } from './ProductsPage/Origins/OrangesModal/orangesModal.component';
 //    import { KiwisModalComponent } from './ProductsPage/Origins/kiwisModal/kiwisModal.component';
 //    import { PeachesModalComponent } from './ProductsPage/Origins/PeachesModal/peachesModal.component';
 //    import { NectarinesModalComponent } from './ProductsPage/Origins/NectarinesModal/nectarinesModal.component';
 //    import { PlumsModalComponent } from './ProductsPage/Origins/PlumsModal/plumsModal.component';
 //    import { AvocatoesModalComponent } from './ProductsPage/Origins/AvocatoesModal/avocatoesModal.component';
 //  // Granos
 //    import { LinseedModalComponent } from './ProductsPage/Origins/LinseedModal/linssedModal.component';
 //    import { BarleyModalComponent } from './ProductsPage/Origins/BarleyModal/barleyModal.component';
 //    import { SunFlowerSeedsModalComponent } from './ProductsPage/Origins/sunFlowerSeedsModal/sunFlowerSeedsModal.component';
    import { AlpisteModalComponent } from './ProductsPage/Origins/AlpisteModal/alpisteModal.component';
 //    import { YellowCornModalComponent } from './ProductsPage/Origins/YellowCornModal/yellowCornModal.component';
 //    import { CornForPopCornModalComponent } from './ProductsPage/Origins/CornForPopCornModal/cornForPopCornModal.component';
 //    import { BeansModalComponent } from './ProductsPage/Origins/BeansModal/beansModal.component';
 //    import { OansModalComponent } from './ProductsPage/Origins/OansModal/OansModal.component';
 //  // TUBERCULOS
 //    import { PotatoesModalComponent } from './ProductsPage/Origins/PotatoesModal/potatoesModal.component';
 //  // Especias
 //    import { CinnamonModalComponent } from './ProductsPage/Origins/CinnamonModal/cinnamonModal.component';
 //    import { JamaicaFlowersModalComponent } from './ProductsPage/Origins/JamaicaFlowers/jamaicaFlowersModal.component';
 // // bulbos
 //    import { GarlicsModalComponent } from './ProductsPage/Origins/GarlicsModal/garlicsModal.component';
 //    import { OnionsModalComponent } from './ProductsPage/Origins/OnionsModal/onionsModal.component';

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
    // Frutas
        ApplesModalComponent,
  //       GrapesModalComponent,
  //       PearsModalComponent,
  //       TangerinesModalComponent,
  //       OrangesModalComponent,
  //       KiwisModalComponent,
  //       PeachesModalComponent,
  //       NectarinesModalComponent,
  //       PlumsModalComponent,
  //       AvocatoesModalComponent,
  //   // Granos
  //       LinseedModalComponent,
  //       BarleyModalComponent,
  //       SunFlowerSeedsModalComponent,
        AlpisteModalComponent,
  //       YellowCornModalComponent,
  //       CornForPopCornModalComponent,
  //       BeansModalComponent,
  //       OansModalComponent,
  // // Tubeculos
  //       PotatoesModalComponent,
  // // Especias
  //       CinnamonModalComponent,
  //       JamaicaFlowersModalComponent,
  // // Bulbos
  //       GarlicsModalComponent,
  //       OnionsModalComponent,
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
