import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { VacunaInterface } from '../interfaces/vacuna-interface';

@Injectable({
  providedIn: 'root'
})
export class VacunasService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  CrearVacuna(data:VacunaInterface){
    this.http.post(`${environment.backendUrl}/vacuna`, data).subscribe(
      (result:any) => {
        
      },
      (err:any) => {
        
      }
    );
  }

}
