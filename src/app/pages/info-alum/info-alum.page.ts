import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
///infoperfil
import {InfoService } from  '../../services/info.service';
interface alumno {
    id?: string;
    nombre: string;
    img: string;
    usuario:string;
    apellidoP:string;
    carrera:string;
    correo:string
  }
@Component({
  selector: 'app-info-alum',
  templateUrl: './info-alum.page.html',
  styleUrls: ['./info-alum.page.scss'],
})
export class InfoAlumPage implements OnInit {

  public alumnos : any = [];

  constructor(private router: Router,
    public InfoServ : InfoService
    ) { }

  ngOnInit() {
    this.InfoServ.getAlumno().subscribe( alumnos => {
      alumnos.map(alumnos =>{
        const data : alumno = alumnos.payload.doc.data() as alumno;
        data.id = alumnos.payload.doc.id;
        console.log(data)
        this.alumnos.push(data);
      })
    })
  }

}