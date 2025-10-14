import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Distancia } from './distOperacion';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  formulario!: FormGroup;
  objmult = new Distancia;
  resultado!: number;

  constructor() { }
  ngOnInit(): void {
    this.formulario = new FormGroup({
      numx1: new FormControl(''),
      numy1: new FormControl(''),
      numx2: new FormControl(''),
      numy2: new FormControl(''),
      s1: new FormControl(''),
      s2: new FormControl('')

    });
  }

  multNumeros(): void {
    let x1 = this.formulario.value.numx1;
    let y1 = this.formulario.value.numy1;
    let x2 = this.formulario.value.numx2;
    let y2 = this.formulario.value.numy2;

    this.objmult.x1 = x1;
    this.objmult.y1 = y1;
    this.objmult.x2 = x2;
    this.objmult.y2 = y2;

    this.objmult.calcularDistancia();
    this.resultado = this.objmult.resultado;

  }
}
