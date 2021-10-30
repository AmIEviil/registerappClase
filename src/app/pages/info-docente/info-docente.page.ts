import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-info-docente',
  templateUrl: './info-docente.page.html',
  styleUrls: ['./info-docente.page.scss'],
})
export class InfoDocentePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
