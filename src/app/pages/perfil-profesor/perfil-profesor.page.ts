import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; /////
import { Router } from '@angular/router'; //para poder hacer el linkeo al presionar 'Si'
///infoperfil
import {InfoService } from  '../../services/info.service';
interface profe {
  id?: string;
  Nombre: string;
  img: string;
  usuario:string;
  apellidoP:string;
  correo:string
  especialidad:string;
}
@Component({
  selector: 'app-perfil-profesor',
  templateUrl: './perfil-profesor.page.html',
  styleUrls: ['./perfil-profesor.page.scss'],
})
export class PerfilProfesorPage implements OnInit {
  
  public profesor : any = [];

  constructor(public alertController: AlertController, private router: Router,public InfoServ : InfoService
    ) { }

    ngOnInit() {
      this.InfoServ.getProfe().subscribe( profesor => {
        profesor.map(profesor =>{
          const data : profe = profesor.payload.doc.data() as profe;
          data.id = profesor.payload.doc.id;
          
          this.profesor.push(data);
        })
      })
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
