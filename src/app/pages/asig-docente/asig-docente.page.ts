import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-asig-docente',
  templateUrl: './asig-docente.page.html',
  styleUrls: ['./asig-docente.page.scss'],
})
export class AsigDocentePage implements OnInit {

  constructor(private router : Router , public actionSheetController: ActionSheetController) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Asignatura',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Crear QR',
        icon: 'share',
        handler: () => {
          console.log('Creando QR...');
          this.router.navigate(['/crear-qr']);
        }
      }, {
        text: 'Crear Asistencia',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  prueba(){
    this.presentActionSheet();
  }

  ngOnInit() {
  }

}
