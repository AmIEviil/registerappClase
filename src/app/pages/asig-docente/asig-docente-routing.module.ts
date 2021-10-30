import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsigDocentePage } from './asig-docente.page';


const routes: Routes = [
  {
    path: '',
    component: AsigDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsigDocentePageRoutingModule {}
