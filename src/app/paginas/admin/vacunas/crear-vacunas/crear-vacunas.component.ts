import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VacunaInterface } from 'src/app/interfaces/vacuna-interface';
import { NotificacionesService } from 'src/app/services/notificaciones.service';
import { VacunasService } from 'src/app/services/vacunas.service';

@Component({
  selector: 'app-crear-vacunas',
  templateUrl: './crear-vacunas.component.html',
  styleUrls: ['./crear-vacunas.component.css']
})
export class CrearVacunasComponent implements OnInit {

  innerHeight: any;
  crearVacunaForm = new FormGroup({
    nombre: new FormControl('Moderna')
  });

  constructor(
    private vacunaService: VacunasService
  ) {
    this.innerHeight = (window.innerHeight * 25) / 100;
    console.log(window.innerHeight);

  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerHeight = (window.innerHeight * 25) / 100;
    console.log(this.innerHeight);
    
  }

  crearVacunaSubmit(){
    const data: VacunaInterface = this.crearVacunaForm.value;
    console.log(data);
    this.vacunaService.CrearVacuna(data);
  }

}
