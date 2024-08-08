import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Amani Bisimwa',
    loadComponent: () => import('./ui/landing-page/landing-page.component'),
  },
  {
    path: ':projectId',
    loadComponent: () => import('./ui/project-detail/project-detail.component'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
