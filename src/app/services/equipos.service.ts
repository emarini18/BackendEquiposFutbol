import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private url = 'http://localhost:3000/equipos';
  // private url = 'https://api-alumnoucv.herokuapp.com/talleres';

  constructor( private http:HttpClient) {}


  getAllEquipos(){
    return this.http.get(`${this.url}/all`);
  }
}
