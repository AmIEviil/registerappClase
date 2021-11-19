import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; /////
import { Router } from '@angular/router'; //para poder hacer el linkeo al presionar 'Si'
///infoperfil
import {InfoService } from  '../../services/info.service';
interface alumno {
  id?: string;
  Nombre: string;
  img: string;
  usuario:string;
  apellidoP:string;
  correo:string
  especialidad:string;
}
@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  styleUrls: ['./perfil-alumno.page.scss'],
})
export class PerfilAlumnoPage implements OnInit {

  public alumnos : any = [];
  
  constructor(public alertController: AlertController, private router: Router,public InfoServ : InfoService
    ) { }

  ngOnInit() {
    this.InfoServ.getAlumno().subscribe( alumnos => {
      alumnos.map(alumnos =>{
        const data : alumno = alumnos.payload.doc.data() as alumno;
        data.id = alumnos.payload.doc.id;
        
        this.alumnos.push(data);
      })
    })
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
            this.router.navigate(['/home']);
            
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
