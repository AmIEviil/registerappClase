import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; //para poder hacer el linkeo al presionar 'Si'
//
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-reestablecer-pass',
  templateUrl: './reestablecer-pass.page.html',
  styleUrls: ['./reestablecer-pass.page.scss'],
})
export class ReestablecerPassPage implements OnInit {
  usuario:string;
  email:string;
  constructor(public alertController: AlertController, private router: Router,private navCtrl : NavController) { }

  ngOnInit() {
  }

  async mensajeAlerta1() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atención',
      message: 'Se le enviará un correo de verificacion a la siguiente direccion ' +this.email+ ' ? ',
      buttons: [
        {
          text: 'Aceptar',
          handler: (dis) => {
            this.mensajeAlerta2();
          }
        }, {
          text: 'Cancelar',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

  async mensajeAlerta2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Listo!',
      message: 'Se le acaba de enviar un correo electronico con el link para reestablecer su contraseña',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Ok');
            this.router.navigate(['/home'])
          }
        }
      ]
    });
    
    await alert.present();

  }
}
