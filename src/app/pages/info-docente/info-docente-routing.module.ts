import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoDocentePage } from './info-docente.page';

const routes: Routes = [
  {
    path: '',
    component: InfoDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoDocentePageRoutingModule {}
