import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; /////
import { Router } from '@angular/router'; //para poder hacer el linkeo al presionar 'Si'

@Component({
  selector: 'app-perfil-profesor',
  templateUrl: './perfil-profesor.page.html',
  styleUrls: ['./perfil-profesor.page.scss'],
})
export class PerfilProfesorPage implements OnInit {

  constructor(public alertController: AlertController, private router: Router) { }

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
