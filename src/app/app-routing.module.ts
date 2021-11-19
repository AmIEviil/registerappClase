import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'perfil-alumno',
    loadChildren: () => import('./pages/perfil-alumno/perfil-alumno.module').then( m => m.PerfilAlumnoPageModule)
  },
  {
    path: 'perfil-profesor',
    loadChildren: () => import('./pages/perfil-profesor/perfil-profesor.module').then( m => m.PerfilProfesorPageModule)
  },
  {
    path: 'crear-qr',
    loadChildren: () => import('./pages/crear-qr/crear-qr.module').then( m => m.CrearQRPageModule)
  },
  {
    path: 'escanear-qr',
    loadChildren: () => import('./pages/escanear-qr/escanear-qr.module').then( m => m.EscanearQRPageModule)
  },
  {
    path: 'reestablecer-pass',
    loadChildren: () => import('./pages/reestablecer-pass/reestablecer-pass.module').then( m => m.ReestablecerPassPageModule)
  },
  {
    path: 'asig-alum',
    loadChildren: () => import('./pages/asig-alum/asig-alum.module').then( m => m.AsigAlumPageModule)
  },
  {
    path: 'asig-docente',
    loadChildren: () => import('./pages/asig-docente/asig-docente.module').then( m => m.AsigDocentePageModule)
  },
  {
    path: 'info-alum',
    loadChildren: () => import('./pages/info-alum/info-alum.module').then( m => m.InfoAlumPageModule)
  },
  {
    path: 'info-docente',
    loadChildren: () => import('./pages/info-docente/info-docente.module').then( m => m.InfoDocentePageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista.module').then( m => m.ListaPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
