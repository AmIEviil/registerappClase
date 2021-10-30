import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoAlumPageRoutingModule } from './info-alum-routing.module';

import { InfoAlumPage } from './info-alum.page';

import { AppModuleModule } from 'src/app/app-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoAlumPageRoutingModule,
    AppModuleModule
  ],
  declarations: [InfoAlumPage]
})
export class InfoAlumPageModule {}
