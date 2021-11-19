import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
///infoperfil
import {InfoService } from  '../../services/info.service';
interface profe {
    id?: string;
    Nombre: string;
    img: string;
    usuario:string;
    apellidoP:string;
    correo:string
    especialidad:string;
  }
@Component({
  selector: 'app-info-docente',
  templateUrl: './info-docente.page.html',
  styleUrls: ['./info-docente.page.scss'],
})
export class InfoDocentePage implements OnInit {

  public profesor : any = [];

  constructor(private router: Router,
    public InfoServ : InfoService
    ) { }

  ngOnInit() {
    this.InfoServ.getProfe().subscribe( profesor => {
      profesor.map(profesor =>{
        const data : profe = profesor.payload.doc.data() as profe;
        data.id = profesor.payload.doc.id;
        console.log(data)
        this.profesor.push(data);
      })
    })
  }

}