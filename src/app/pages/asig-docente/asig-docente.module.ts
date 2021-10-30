import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsigDocentePageRoutingModule } from './asig-docente-routing.module';

import { AsigDocentePage } from './asig-docente.page';

import { AppModuleModule } from 'src/app/app-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsigDocentePageRoutingModule,
    AppModuleModule
  ],
  declarations: [AsigDocentePage]
})
export class AsigDocentePageModule {}
