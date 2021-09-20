import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NotificacionesService } from '../services/notificaciones.service';

@Injectable()
export class CheckConnectionToBackendInterceptor implements HttpInterceptor {

  constructor(
    private notificacionesService: NotificacionesService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {

          if (evt.body.Message && evt.status === 200) {
            console.log("Interceptor: OK");
            
            console.log(evt);
            
            this.notificacionesService.todoBien(evt.body.Message);
          }else{
            this.notificacionesService.todoBien("");
          }

        }
      }),
      catchError((err: HttpErrorResponse) => {

        console.log("Interceptor: Error Code:", err.status);
        console.log(err.error);
        

        if (err.status === 0) {

          this.notificacionesService.error("No hay conexion hacia el backend");

        }

        if (err.status === 404) {

          this.notificacionesService.error("Recurso no encontrado");

        }

        if (err.status === 500) {

          this.notificacionesService.error("Error interno del servidor");

        }

        return throwError(err);

      })
    );
  }
}
