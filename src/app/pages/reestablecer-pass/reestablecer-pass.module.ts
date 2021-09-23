import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReestablecerPassPageRoutingModule } from './reestablecer-pass-routing.module';

import { ReestablecerPassPage } from './reestablecer-pass.page';
import { AppModuleModule } from 'src/app/app-module.module'; //IMPORTAMOS EL MODULO QUE CREAMOS 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReestablecerPassPageRoutingModule,
    AppModuleModule //AQUI ESTA EL MISMO MODULO
  ],
  declarations: [ReestablecerPassPage]
})
export class ReestablecerPassPageModule {}
