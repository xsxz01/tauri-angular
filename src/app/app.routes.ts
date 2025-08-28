import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: '', redirectTo: 'page', pathMatch: 'full' },
  {
    path: 'page',
    loadComponent: () => import('./pages/page.component').then((mod) => mod.PageComponent),
  }
];
