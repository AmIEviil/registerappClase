import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; /////
import { Router } from '@angular/router'; //para poder hacer el linkeo al presionar 'Si'
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQRPage implements OnInit {

  constructor(public alertController: AlertController, 
              private router: Router,
              private barcodeScann: BarcodeScanner,
              private toastCtrl: ToastController              
              ) { }

  ngOnInit() {
  }

  scannerQR(){
    this.barcodeScann.scan().then(
      barcodeData=>{
        this.mensaje(barcodeData.text)
      }
    )
  }
  async mensaje(texto:any){
    let toast=await this.toastCtrl.create({
      message: 'Se ha escaneado: ' + texto,
      duration: 5000,
      position: 'top'
    });
    await toast.present();
  }
  
  async mensajeCerrarSesion() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atención',
      message: '¿Está seguro que desea cerrar sesión?',
      buttons: [
        {
          text: 'Si',
          handler: (dis) => {
            console.log();
            this.router.navigate(['/logueo-alumno']);
            
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
