import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'sing-in',
        loadComponent: () => import('./auth/features/sign-in/sign-in.component').then((c) => c.SignInComponent),
      },
      {
        path: 'sing-up',
        loadComponent: () => import('./auth/features/sign-up/sign-up.component').then((c) => c.SignUpComponent),
      },
    ],
  },
  {
    path: 'utl',
    children: [
      {
        path: 'listaalumnos',
        loadComponent: () => import('./utl/alumnos/alumnos.component').then((c) => c.AlumnosComponent),
      },
      {
        path: 'agregar',
        loadComponent: () => import('./utl/agregar/agregar.component').then((c) => c.AgregarComponent),
      },
      {
        path: 'eliminar/:matricula',
        loadComponent: () => import('./utl/eliminar/eliminar.component').then((c) => c.EliminarComponent),
      },
      {
        path: 'editar/:matricula',
        loadComponent: () => import('./utl/editar/editar.component').then((c) => c.EditarComponent),
      },
    ],
  },

  {
    path: 'formularios',
    children: [
      {
        path: 'distancia',
        loadComponent: () => import('./formularios/distancia/distancia.component').then((c) => c.DistanciaComponent),
      },
      {
        path: 'multiplicacion',
        loadComponent: () => import('./formularios/multiplicacion/multiplicacion.component').then((c) => c.MultiplicacionComponent),
      },
      {
        path: 'axb',
        loadComponent: () => import('./formularios/axb/axb.component').then((c) => c.AxbComponent),
      },
      {
        path: 'zodiaco',
        loadComponent: () => import('./formularios/zodiaco/zodiaco.component').then((c) => c.ZodiacoComponent),
      },
    ],
  },

  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: '**', redirectTo: 'admin', }

];
