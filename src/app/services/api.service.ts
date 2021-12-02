import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  


  ruta_profe:string="http://127.0.0.1:8000/api/profesor/"
  ruta_asist:string="http://127.0.0.1:8000/api/asist/"
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*'
    })
  }
  ////////////////////////////////////////////////////////////////
  getProfesor(id):Observable<any>{
    return this.http.post(this.ruta_profe+id,this.httpOptions)
  }

  getAlumno(id):Observable<any>{
    return this.http.post("http://127.0.0.1:8000/api/alumno/"+id,this.httpOptions)
  }

  getCursosProfe(rut):Observable<any>{
    return this.http.get("http://127.0.0.1:8000/api/profe_curso/"+rut)    
  }
  getConteo():Observable<any>{
    return this.http.post("http://127.0.0.1:8000/api/conteo/",this.httpOptions)
  }
  postAsistencia(asistencia):Observable<any>{
    return this.http.post(this.ruta_asist+asistencia,this.httpOptions)
  }
}
