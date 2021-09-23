import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logueo-alumno',
  templateUrl: './logueo-alumno.page.html',
  styleUrls: ['./logueo-alumno.page.scss'],
})
export class LogueoAlumnoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irReestablecerPass(){  //metodos que nos llevan a la pagina en especifico
    this.router.navigate(['/reestablecer-pass'])
  }

}
