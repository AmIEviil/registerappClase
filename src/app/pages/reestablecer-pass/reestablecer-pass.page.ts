import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; //para poder hacer el linkeo al presionar 'Si'

@Component({
  selector: 'app-reestablecer-pass',
  templateUrl: './reestablecer-pass.page.html',
  styleUrls: ['./reestablecer-pass.page.scss'],
})
export class ReestablecerPassPage implements OnInit {

  constructor(public alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async mensajeAlerta1() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atención',
      message: 'Se le enviará un correo a la dirección email introducida anteriormente, está seguro(a) que es: holahola123@gmail.com ?',
      buttons: [
        {
          text: 'Si',
          handler: (dis) => {
            console.log();

            this.mensajeAlerta2();
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
