import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//
import { ActionSheetController } from '@ionic/angular';
import { ApiListaService } from 'src/app/services/api-lista.service';

import { DatePipe } from '@angular/common'
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor(private router : Router , public actionSheetController: ActionSheetController, private apiL:ApiListaService ,private pipe: DatePipe,
    private api:ApiService ) { }
  usuarios 
  fecha: any
  hora: any
  ngOnInit() {
  }
  lista(){
    this.apiL.listarTodo().subscribe(
      (data)=>{
        this.usuarios= data;
      },
      (e)=>{
        console.log(e);
      }
    );
    
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

  opciones(){
    this.presentActionSheet()
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Asignatura',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Presencial',
        icon: 'checkmark',
        handler: () => {
          console.log('Actualizando estado...');
        }
      }, {
        text: 'Online',
        icon: 'wifi',
        handler: () => {
          console.log('Actualizando estado...');
        }
      }, {
        text: 'Ausente',
        icon: 'trash',
        handler: () => {
          console.log('Actualizando estado...');
        }
      }, {
        text: 'Justificado',
        icon: 'share',
        handler: () => {
          console.log('Actualizando estado...');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log(role);
  }

  

}
