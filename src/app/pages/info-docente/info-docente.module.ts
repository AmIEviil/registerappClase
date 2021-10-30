import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoDocentePageRoutingModule } from './info-docente-routing.module';

import { InfoDocentePage } from './info-docente.page';

import { AppModuleModule } from 'src/app/app-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoDocentePageRoutingModule,
    AppModuleModule
  ],
  declarations: [InfoDocentePage]
})
export class InfoDocentePageModule {}
