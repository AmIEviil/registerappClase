import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; /////
import { Router } from '@angular/router'; //para poder hacer el linkeo al presionar 'Si'
import {AsignaturasService } from  '../../services/asignaturas.service';
interface asignatura {
    id?: string;
    horario: string;
    nombre: string;
    sala: string;
    seccion: string;
    sigla: string;
    porcentaje:string;
}
@Component({
  selector: 'app-ver-asist',
  templateUrl: './ver-asist.page.html',
  styleUrls: ['./ver-asist.page.scss'],
})
export class VerAsistPage implements OnInit {

  public asignaturas : any = [];

  constructor(public alertController: AlertController, public AsignaService : AsignaturasService,
    private router: Router,           
    ) { }

  ngOnInit() {
    this.AsignaService.getAsignaturas().subscribe( asignaturas => {
      asignaturas.map(asignaturas =>{
        const data : asignatura = asignaturas.payload.doc.data() as asignatura;
        data.id = asignaturas.payload.doc.id;
        this.asignaturas.push(data);
      })
    })
  }

}
