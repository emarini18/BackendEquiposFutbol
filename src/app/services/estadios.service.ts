import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EstadioService {

  private url = 'http://localhost:3000/estadios';
  // private url = 'https://api-alumnoucv.herokuapp.com/talleres';

  constructor( private http:HttpClient) {}


  getAllEstadios(){
    return this.http.get(`${this.url}`);
  }
}