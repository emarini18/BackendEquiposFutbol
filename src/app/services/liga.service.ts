import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LigaService {

  private url = 'http://localhost:3000/ligas';
  // private url = 'https://api-alumnoucv.herokuapp.com/talleres';

  constructor( private http:HttpClient) {}


  getAllLiga(){
    return this.http.get(`${this.url}`);
  }
}