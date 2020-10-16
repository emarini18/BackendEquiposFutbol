import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  idUsuario: String;
  autenticado:boolean=false;
  private url = 'http://localhost:3000/usuarios'
  // private url = 'https://api-alumnoucv.herokuapp.com/alumnos';

  constructor( 
    private http:HttpClient,
    private router: Router
    ) {}

  registrarse(user){
    return this.http.post<any>(`${this.url}/registrar`, user);
  }

  login(user){
    return this.http.post<any>(`${this.url}/login`, user);
  }
  
  loggedIn(): boolean{
    return this.autenticado=true;
  }


  logOut(){
    this.router.navigate(['/login']);
    return this.autenticado=false;    
  }

  getPerfil(id: String){
    return this.http.get(`${this.url}/profile/${id}`);
  }

}
