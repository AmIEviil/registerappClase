import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoAlumPage } from './info-alum.page';

const routes: Routes = [
  {
    path: '',
    component: InfoAlumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoAlumPageRoutingModule {}
