import { Routes } from '@angular/router';
import { Error404 } from './core/404/404.component'
export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: './views/views.module#ViewModule'
  },
  {
    path: '**',
    component: Error404
  }
];
