import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./features/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'citas',
        loadChildren: () => import('./features/citas/cita.component').then(m => m.CitaComponent)
    }
];