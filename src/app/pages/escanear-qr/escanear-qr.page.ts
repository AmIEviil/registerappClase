import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; /////
import { Router } from '@angular/router'; //para poder hacer el linkeo al presionar 'Si'
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common'
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQRPage implements OnInit {
  fecha: any
  hora: any
  constructor(public alertController: AlertController, 
              private router: Router,
              private barcodeScann: BarcodeScanner,
              private toastCtrl: ToastController   ,
              private api: ApiService      ,
              private pipe:DatePipe     
              ) { }

  ngOnInit() {
    this.scannerQR();
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
      },
      (e)=>{
        console.log(e)
      }
    )
  }

  scannerQR(){
    this.barcodeScann.scan().then(barcodeData=>{
        console.log(barcodeData.text);
        var datos=JSON.parse(barcodeData.text)
        datos["rutAlumno"]=JSON.parse(localStorage.getItem("usuario")).rut
        this.mensaje(barcodeData.text)
      }
    )
  }

  grabar(){
    var rutProfe = (JSON.parse(localStorage.getItem("usuario"))).rut
    var idRamo = localStorage.getItem("idRamo")
    var rutAlumno = (JSON.parse(localStorage.getItem("usuario"))).rut
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
          "idAlumno":rutAlumno,
          "fecha": this.fecha,
          "hora": this.hora
        }
        console.log(asistencia)
        this.api.grabarAsistencia(asistencia).subscribe(
          (success)=>{
            console.log("Asistencia Registrada")
          },
          (e)=>{
            console.log("Error al registrar Asistencia")
          }
        );
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
