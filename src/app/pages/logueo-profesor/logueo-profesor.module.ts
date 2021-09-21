import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogueoProfesorPageRoutingModule } from './logueo-profesor-routing.module';

import { LogueoProfesorPage } from './logueo-profesor.page';
import { AppModuleModule } from 'src/app/app-module.module'; ////////////////////////

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogueoProfesorPageRoutingModule,
    AppModuleModule //////////////////////////////
  ],
  declarations: [LogueoProfesorPage]
})
export class LogueoProfesorPageModule {}
