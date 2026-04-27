import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
    },
    {
        path: 'citas',
        loadChildren: () => import('./features/citas/cita.component').then(m => m.CitaComponent)
    }
];