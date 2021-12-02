import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//
import { ActionSheetController } from '@ionic/angular';
//
import {AsignaturasService } from  '../../services/asignaturas.service';
interface ramo {
  id?: string;
  idRamo:string;
  horario: string;
  nombre: string;
  sala: string;
  seccion: string;
  sigla: string;
}

@Component({
  selector: 'app-asig-docente',
  templateUrl: './asig-docente.page.html',
  styleUrls: ['./asig-docente.page.scss'],
})
export class AsigDocentePage implements OnInit {

  constructor(private router : Router , public actionSheetController: ActionSheetController, public AsignaService : AsignaturasService ) { }

  public ramos : ramo [] = [];

  ngOnInit() {
    
    this.listadoAsignaturas()
  }

  listadoAsignaturas(){
    this.AsignaService.getRamos().subscribe( ramos => {
      ramos.map(ramos =>{
        const data : ramo = ramos.payload.doc.data() as ramo;
        data.id = ramos.payload.doc.id;
        
        this.ramos.push(data);
      })
    })
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Asignatura',
      cssClass: 'my-custom-class',
      buttons: [
        {
        text: 'Crear QR',
        icon: 'share',
        handler: () => {
          console.log('Creando QR...');
          this.router.navigate(['/crear-qr']);
        }
      }, {
        text: 'Revisar Asistencia',
        icon: 'logo-buffer',
        handler: () => {
          this.router.navigate(['/lista']);
        }
      },{
        text: 'Atras',
        icon: 'arrow-back',
        
        handler: () => {
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log(role);
  }

  opciones(idRamo:string){
    localStorage.setItem("idRamo",idRamo)
    this.presentActionSheet();
  }

}
