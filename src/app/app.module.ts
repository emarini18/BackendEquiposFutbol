import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { LigaComponent } from './components/liga/liga.component';
import { EntrenadorComponent } from './components/entrenador/entrenador.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { EstadiosComponent } from './components/estadios/estadios.component';

// Rutas
import { APP_ROUTING } from './app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrarseComponent,
    EquiposComponent,
    LigaComponent,
    EntrenadorComponent,
    NavbarComponent,
    EstadiosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
