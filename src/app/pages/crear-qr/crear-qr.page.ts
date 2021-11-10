import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular'; /////
import { Router } from '@angular/router'; //para poder hacer el linkeo al presionar 'Si'

@Component({
  selector: 'app-crear-qr',
  templateUrl: './crear-qr.page.html',
  styleUrls: ['./crear-qr.page.scss'],
})
export class CrearQRPage implements OnInit {
  qrData = "https://console.firebase.google.com/u/0/project/undefined/firestore/data/usuarios/tWXHTpY5YABznPmDIEK0" ;
  elementType : 'url'  |  'img'  |  'canvas'  =  'canvas'
  constructor(private barcodeScanner  :BarcodeScanner, public alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async mensajeCerrarSesionProfe() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atención',
      message: '¿Está seguro que desea cerrar sesión?',
      buttons: [
        {
          text: 'Si',
          handler: (dis) => {
            console.log();
            this.router.navigate(['/logueo-profesor']);
            
          }
        }, {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log();
          }
        }
      ]
    });

    await alert.present();
  }
}



