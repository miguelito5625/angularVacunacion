import { Injectable } from '@angular/core';
declare var Swal: any;


@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor() { }

  cargando(){
    Swal.fire({
      title: 'Realizando operacion',
      icon: 'info',
      html: 'Por favor, espere',
      timerProgressBar: true,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });
  }

  todoBien(mensaje:string){
    Swal.fire({
      icon: 'success',
      title: mensaje,
      showCloseButton: true,
      confirmButtonText: 'Entendido!',
    });
  }

  async pregunta(): Promise<boolean>{
    const darDeBaja = await Swal.fire({
      icon: 'info',
      title: '¿Reactivar empleado?',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    });

    if (!darDeBaja.isConfirmed) {
      return false;
    }
    return true;
  }

  error(mensaje:string){
    Swal.fire({
      title: 'Error!',
      text: mensaje,
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }

}
