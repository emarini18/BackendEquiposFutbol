import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EntrenadorService {

  private url = 'http://localhost:3000/entrenador';
  // private url = 'https://api-alumnoucv.herokuapp.com/talleres';

  constructor( private http:HttpClient) {}


  getAllEntrenadores(){
    return this.http.get(`${this.url}/all`);
  }
}