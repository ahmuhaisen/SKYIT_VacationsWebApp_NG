import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
