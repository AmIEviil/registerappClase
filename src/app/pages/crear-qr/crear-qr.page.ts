import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular'; /////
import { Router } from '@angular/router'; //para poder hacer el linkeo al presionar 'Si'
import { DatePipe } from '@angular/common'
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-crear-qr',
  templateUrl: './crear-qr.page.html',
  styleUrls: ['./crear-qr.page.scss'],
})
export class CrearQRPage implements OnInit {
  qrData = "https://console.firebase.google.com/u/0/project/undefined/firestore/data/usuarios/tWXHTpY5YABznPmDIEK0";
  elementType: 'url' | 'img' | 'canvas' = 'canvas'
  constructor(private barcodeScanner: BarcodeScanner,
    public alertController: AlertController,
    private router: Router,
    private pipe: DatePipe,
    private api:ApiService
  ) { }
  fecha: any
  hora: any
  ngOnInit() {
    var rutProfe = (JSON.parse(localStorage.getItem("usuario"))).rut
    var idRamo = localStorage.getItem("idRamo")
    console.log("Rut: " + rutProfe)
    console.log("idRamo: " + idRamo)

    var now = Date.now()
    this.fecha = this.pipe.transform(now, 'yyyy-MM-dd')
    this.hora = this.pipe.transform(now, 'HH:mm:ss')
    var idAsistencia= this.api.getConteo().subscribe(
      (data)=>{
        console.log("Cantidad de asistencias : " + data)
        var asistencia = {
          "id": data+1,
          "idCurso": idRamo,
          "idProfesor": rutProfe,
          "fecha": this.fecha,
          "hora": this.hora
        }
        console.log(asistencia)
        this.qrData=JSON.stringify(asistencia)
      },
      (e)=>{
        console.log(e)
      }
    )
    
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



