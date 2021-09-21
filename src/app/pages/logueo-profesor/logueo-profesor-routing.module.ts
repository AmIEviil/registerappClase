import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogueoProfesorPage } from './logueo-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: LogueoProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogueoProfesorPageRoutingModule {}
