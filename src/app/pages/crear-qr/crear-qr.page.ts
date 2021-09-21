import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-crear-qr',
  templateUrl: './crear-qr.page.html',
  styleUrls: ['./crear-qr.page.scss'],
})
export class CrearQRPage implements OnInit {
  qrData = "https://memegenerator.net/instance/20680770/willy-wonka-nico-es-gay-dime-que-se-siente-ser-gay" ;
  elementType : 'url'  |  'img'  |  'canvas'  =  'canvas'
  constructor(private barcodeScanner  :BarcodeScanner) { }

  ngOnInit() {
  }

}



