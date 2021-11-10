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
}