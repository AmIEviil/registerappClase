import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerAsistPageRoutingModule } from './ver-asist-routing.module';

import { VerAsistPage } from './ver-asist.page';
import { AppModuleModule } from 'src/app/app-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerAsistPageRoutingModule,
    AppModuleModule
  ],
  declarations: [VerAsistPage]
})
export class VerAsistPageModule {}
