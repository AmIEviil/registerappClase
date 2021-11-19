import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private db : AngularFirestore) { }


  getUsuario(){
    return this.db.collection('usuarios').snapshotChanges()
  }
  getProfe(){
    return this.db.collection('profe').snapshotChanges()
  }
  getAlumno(){
    return this.db.collection('alumno').snapshotChanges()
  }
}