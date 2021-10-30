import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsigAlumPage } from './asig-alum.page';

const routes: Routes = [
  {
    path: '',
    component: AsigAlumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsigAlumPageRoutingModule {}
