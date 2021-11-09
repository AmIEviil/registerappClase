import { Component } from '@angular/core';
import { Router } from '@angular/router'; //IMPORTAMOS PARA LINKEAR LAS PAGINAS (PROFE Y ALUMNO)
//import api
import { ApiloginService } from 'src/app/services/apilogin.service';
import { NavController } from '@ionic/angular';
import { UsuarioI } from '../model/UsuarioI';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  nombre:string;
  pass:string;
  usuarios:UsuarioI[]; // recuperar todos los usuarios

  constructor(private router: Router,
    private api : ApiloginService,
    private navCtrl : NavController,
    private toast : ToastController
    ) {}
  
 
  validar(){
    console.log(this.nombre+ " - "+this.pass);
    this.api.getTodos().subscribe(resp=>{
      console.log(resp);
      this.usuarios=resp;
      var x = 0;
      this.usuarios.forEach(item => {
        console.log(item.nombre+ " - "+item.pass);
        if (item.nombre==this.nombre && item.pass==this.pass) {
          console.log("Usuario Validado con Nivel "+ item.nivel);
          x=1;
          if (item.nivel==1) {
            this.navCtrl.navigateForward('/perfil-profesor')  
          }else{
            this.navCtrl.navigateForward('/perfil-alumno')  
          }          
        }
      });
      if (x==0) {
        this.mensaje();
      }
    });
  }
  async mensaje(){
    const alerta=await this.toast.create({
      message:'Usuario o Contraseña incorrecta',
      duration:5000,
      position:'middle'
    });
    await alerta.present();
  }
  irlogueoAlumno(){  //metodos que nos llevan a la pagina en especifico
    this.router.navigate(['/logueo-alumno'])
  }

  irlogueoProfesor(){ //lo mismo de arriba
    this.router.navigate(['/logueo-profesor'])
  }
  irReestablecerPass(){  //metodos que nos llevan a la pagina en especifico
    this.router.navigate(['/reestablecer-pass'])
  }

}
