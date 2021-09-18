import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginInterface } from '../interfaces/login-interface';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import { NotificacionesService } from './notificaciones.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private notificacionesService: NotificacionesService
  ) { }

  login(data:LoginInterface){
    this.notificacionesService.cargando("Iniciando Sesion");
    console.log("login start");
    this.http.post(`${environment.backendUrl}/autenticacion/login`, data).subscribe(
      (result:any) => {
        console.log("TODO BIEN");
        
        console.log(result);
        const tokendata = jwt_decode(result.Data);
        console.log(tokendata);
        localStorage.setItem('token', result.Data);
        this.notificacionesService.todoBien(result.Message)
        this.router.navigate(['/admin']);

      },
      (err:any) => {
        console.log("OCURRIO UN ERROR");
        console.log(err);

        // if (err.status === 0) {
        //   this.notificacionesService.error("No hay conexion hacia el servidor");
        //   return;
        // }

        this.notificacionesService.error(err.error.Message);

      }
    );
  }

}
