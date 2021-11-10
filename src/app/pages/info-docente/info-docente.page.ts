import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {InfoService } from  '../../services/info.service';
interface usuario {
    id?: string;
    nombre: string;
    img: string;
    username:string;
    apellidoP:string;
    carrera:string;
    correo:string
    especialidad:string;
  }
@Component({
  selector: 'app-info-docente',
  templateUrl: './info-docente.page.html',
  styleUrls: ['./info-docente.page.scss'],
})
export class InfoDocentePage implements OnInit {

  public usuarios : any = [];

  constructor(private router: Router,
    public InfoServ : InfoService
    ) { }

  ngOnInit() {
    this.InfoServ.getUsuario().subscribe( usuarios => {
      usuarios.map(usuarios =>{
        const data : usuario = usuarios.payload.doc.data() as usuario;
        data.id = usuarios.payload.doc.id;
        
        console.log(data)
        this.usuarios.push(data);
      })
    })
  }

}