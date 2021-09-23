import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; /////
import { Router } from '@angular/router'; //para poder hacer el linkeo al presionar 'Si'

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  styleUrls: ['./perfil-alumno.page.scss'],
})
export class PerfilAlumnoPage implements OnInit {

  constructor(public alertController: AlertController, private router: Router) { }

  ngOnInit() {
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
