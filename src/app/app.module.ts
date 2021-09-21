import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'; ///IMPORTAR ESTO AGREGAR 'ngx'
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx'; ///IMPORTAR ESTO AGREGAR 'ngx'
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  , BarcodeScanner, Base64ToGallery //Y AQUI IMPORTAMOS LAS DOS COSAS
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
