import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsigAlumPageRoutingModule } from './asig-alum-routing.module';

import { AsigAlumPage } from './asig-alum.page';

import { AppModuleModule } from 'src/app/app-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsigAlumPageRoutingModule,
    AppModuleModule
  ],
  declarations: [AsigAlumPage]
})
export class AsigAlumPageModule {}
