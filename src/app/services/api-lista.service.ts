import { Injectable } from '@angular/core';
//
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiListaService {

  constructor(private Http : HttpClient) { }

  ruta_listar:string="http://127.0.0.1:8000/api/persona/";
  listarTodo():Observable<any>{
    return this.Http.get(this.ruta_listar).pipe(retry(2));
  }

}
