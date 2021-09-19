import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NotificacionesService } from '../services/notificaciones.service';

@Injectable()
export class CheckConnectionToBackendInterceptor implements HttpInterceptor {

  constructor(
    private notificacionesService: NotificacionesService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  

    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        
        if (err.status === 0) {
         
          this.notificacionesService.error("No hay conexion hacia el backend");
          
        }

        if (err.status === 404) {
         
          this.notificacionesService.error("Recurso no encontrado");
          
        }

        if (err.status === 500) {
         
          this.notificacionesService.error("Error interno del servidor");
          
        }

        return throwError( err );

      })
    );
  }  
}
