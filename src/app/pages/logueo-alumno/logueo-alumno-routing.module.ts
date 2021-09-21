import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogueoAlumnoPage } from './logueo-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: LogueoAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogueoAlumnoPageRoutingModule {}
