import { Component } from '@angular/core';
import { Router } from '@angular/router'; //IMPORTAMOS PARA LINKEAR LAS PAGINAS (PROFE Y ALUMNO)
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  irlogueoAlumno(){  //metodos que nos llevan a la pagina en especifico
    this.router.navigate(['/logueo-alumno'])
  }

  irlogueoProfesor(){ //lo mismo de arriba
    this.router.navigate(['/logueo-profesor'])
  }


}
