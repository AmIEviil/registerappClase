import { Injectable } from '@angular/core';
//importar
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {UsuarioI} from '../pages/model/UsuarioI';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiloginService {

  private usuarios: Observable<UsuarioI[]>;
  private usuarioCollection: AngularFirestoreCollection<UsuarioI>;

  constructor(db : AngularFirestore ) { 
    this.usuarioCollection = db.collection<UsuarioI>('usuarios');
    this.usuarios = this.usuarioCollection.snapshotChanges().pipe(map(
      actions=>{
        return actions.map(a=>{
          const data= a.payload.doc.data();
          const id= a.payload.doc.id;
         
          return {id, ...data};
        })
      }
    ));
    
  }
  getTodos(){
    return this.usuarios;
  }
}
