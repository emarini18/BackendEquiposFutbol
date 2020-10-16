import { Routes, RouterModule } from '@angular/router';
import { EntrenadorComponent } from './components/entrenador/entrenador.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { EstadiosComponent } from './components/estadios/estadios.component';
import { HomeComponent } from './components/home/home.component';
import { LigaComponent } from './components/liga/liga.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { AuthGuard } from './guards/auth.guard';



const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registrarse', component: RegistrarseComponent },
    { path: 'home/:id', component: HomeComponent, canActivate:[AuthGuard] },
    { path: 'entrenador', component: EntrenadorComponent },
    { path: 'estadio', component: EstadiosComponent },
    { path: 'liga', component: LigaComponent },
    { path: 'equipo', component: EquiposComponent },
    { path: '**', pathMatch:'full', redirectTo: 'login' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

