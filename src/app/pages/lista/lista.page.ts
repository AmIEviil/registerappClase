import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//
import { ActionSheetController } from '@ionic/angular';
import { ApiListaService } from 'src/app/services/api-lista.service';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor(private router : Router , public actionSheetController: ActionSheetController, private api:ApiListaService ) { }
  usuarios 
  ngOnInit() {
  }
  lista(){
    this.api.listarTodo().subscribe(
      (data)=>{
        this.usuarios= data;
      },
      (e)=>{
        console.log(e);
      }
    );
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Asignatura',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
        }
      }, {
        text: 'Crear QR',
        icon: 'share',
        handler: () => {
          console.log('Creando QR...');
          this.router.navigate(['/crear-qr']);
        }
      }, {
        text: 'Revisar Asistencia',
        icon: 'caret-forward-circle',
        handler: () => {
          this.router.navigate(['/lista']);
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log(role);
  }

  opciones(){
    console.log('funciona')
  }

}
