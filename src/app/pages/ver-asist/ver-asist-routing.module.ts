import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerAsistPage } from './ver-asist.page';

const routes: Routes = [
  {
    path: '',
    component: VerAsistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerAsistPageRoutingModule {}
