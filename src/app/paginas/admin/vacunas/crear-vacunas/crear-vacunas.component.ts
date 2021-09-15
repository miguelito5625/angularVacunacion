import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor() {
    this.innerHeight = (window.innerHeight * 50) / 100;
    console.log(window.innerHeight);

  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerHeight = (window.innerHeight * 50) / 100;
    console.log(this.innerHeight);
    
  }

  crearVacunaSubmit(){
    const data: any = this.crearVacunaForm.value;
    console.log(data);
    
  }

}
