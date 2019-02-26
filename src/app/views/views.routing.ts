import { Routes } from '@angular/router';

import { HomeComponent } from './HomePage/home.component';

export const ViewsRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: HomeComponent }
];
