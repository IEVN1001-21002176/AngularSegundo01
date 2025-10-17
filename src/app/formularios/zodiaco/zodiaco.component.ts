import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Zodiaco } from './opZodiaco';
@Component({
  selector: 'app-zodiaco',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent {
  formulario!: FormGroup;
  objImp = new Zodiaco;
  nombreRes: string = '';
  edadRes: string = '';
  zodiacoRes: string = '';
  urlImagen: string = '';

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apPaterno: new FormControl(''),
      apMaterno: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      anio: new FormControl('')
    });
  }

  resultado(): void {
    let nombre = this.formulario.value.nombre;
    let apPaterno = this.formulario.value.apPaterno;
    let apMaterno = this.formulario.value.apMaterno;
    let anio = Number(this.formulario.value.anio);


    this.objImp.nombre = nombre;
    this.objImp.ApPaterno = apPaterno;
    this.objImp.ApMaterno = apMaterno;
    this.objImp.Anio = anio;


    this.nombreRes = nombre + " " + apPaterno + " " + apMaterno;
    this.edadRes = this.objImp.obtenerEdad(anio) + " años";
    this.zodiacoRes = this.objImp.obtenerZodiacoChino(anio);
    this.urlImagen = this.objImp.obtenerImagenZodiaco(this.zodiacoRes);
  }
}

