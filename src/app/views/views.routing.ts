import { Routes } from '@angular/router';

import { HomeComponent } from './HomePage/home.component';
import { ProductsComponent } from './ProductsPage/products.component';
import { GalleryComponent } from './GalleryPage/gallery.component';
import { ContactComponent } from './ContactPage/contact.component';

import { AboutComponent } from './Company/AboutPage/about.component';
import { PoliticsComponent } from './Company/PoliticsPage/politics.component';

export const ViewsRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'galeria', component: GalleryComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'empresa/historia', component: AboutComponent },
  { path: 'empresa/privacidad', component: PoliticsComponent }
  PoliticsComponent
];
