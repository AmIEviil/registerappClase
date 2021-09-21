import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscanearQRPageRoutingModule } from './escanear-qr-routing.module';

import { EscanearQRPage } from './escanear-qr.page';
import { AppModuleModule } from 'src/app/app-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscanearQRPageRoutingModule,
    AppModuleModule
  ],
  declarations: [EscanearQRPage]
})
export class EscanearQRPageModule {}
