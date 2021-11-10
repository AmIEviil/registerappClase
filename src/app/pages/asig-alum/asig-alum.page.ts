import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
///asignaturas
import {AsignaturasService } from  '../../services/asignaturas.service';
interface asignatura {
    id?: string;
    horario: string;
    nombre: string;
    sala: string;
    seccion: string;
    sigla: string;
}

@Component({
  selector: 'app-asig-alum',
  templateUrl: './asig-alum.page.html',
  styleUrls: ['./asig-alum.page.scss'],
})
export class AsigAlumPage implements OnInit {
  
  public asignaturas : any = [];

  constructor(private router: Router,
    public AsignaService : AsignaturasService
    ) { }

  ngOnInit() {
    this.AsignaService.getAsignaturas().subscribe( asignaturas => {
      asignaturas.map(asignaturas =>{
        const data : asignatura = asignaturas.payload.doc.data() as asignatura;
        data.id = asignaturas.payload.doc.id;
        
        console.log(data)
        this.asignaturas.push(data);
      })
    })
  }

}
