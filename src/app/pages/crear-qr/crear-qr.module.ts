import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearQRPageRoutingModule } from './crear-qr-routing.module';

import { CrearQRPage } from './crear-qr.page';
import { AppModuleModule } from 'src/app/app-module.module';

import { NgxQRCodeModule } from 'ngx-qrcode2'; //IMPORTAMOS NGX


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearQRPageRoutingModule,
    AppModuleModule,
    NgxQRCodeModule ///////IMPORTAR ESTO
  ],
  declarations: [CrearQRPage]
})
export class CrearQRPageModule {}
