import { Routes } from '@angular/router';

import { HomeComponent } from './HomePage/home.component';
import { ProductsComponent } from './ProductsPage/products.component';

export const ViewsRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductsComponent }
];
