import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logueo-profesor',
  templateUrl: './logueo-profesor.page.html',
  styleUrls: ['./logueo-profesor.page.scss'],
})
export class LogueoProfesorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irReestablecerPass(){  //metodos que nos llevan a la pagina en especifico
    this.router.navigate(['/reestablecer-pass'])
  }
}
