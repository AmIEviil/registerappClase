import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogueoAlumnoPageRoutingModule } from './logueo-alumno-routing.module';

import { LogueoAlumnoPage } from './logueo-alumno.page';
import { AppModuleModule } from 'src/app/app-module.module'; //IMPORTAMOS EL MODULO QUE CREAMOS CON 
                                                        //LAS TODAS LAS LIBRERIAS PARA LA ANIMACIONES

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogueoAlumnoPageRoutingModule,
    AppModuleModule //AQUI ESTA EL MISMO MODULO
  ],
  declarations: [LogueoAlumnoPage]
})
export class LogueoAlumnoPageModule {}
