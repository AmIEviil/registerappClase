import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
///asignaturas
import {InfoService } from  '../../services/info.service';
interface usuario {
    id?: string;
    nombre: string;
    img: string;
    username:string;
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