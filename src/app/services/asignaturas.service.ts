import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  constructor(private db : AngularFirestore) { }


  getAsignaturas(){
    return this.db.collection('asignaturas').snapshotChanges()
  }
  getRamos(){
    return this.db.collection('ramos').snapshotChanges()
  }
}
