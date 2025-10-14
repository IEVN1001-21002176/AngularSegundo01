import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { axb } from './op_axb';

@Component({
  selector: 'app-axb',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './axb.component.html',
  styleUrl: './axb.component.css'
})
export class AxbComponent {
  formulario!: FormGroup;
  objOp = new axb;
  resultadoTexto: string = '';

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      a: new FormControl(''),
      b: new FormControl('')
    });
  }

  aporb() {
    let a = Number(this.formulario.value.a);
    let b = Number(this.formulario.value.b);

    this.objOp.a = a;
    this.objOp.b = b;

    this.objOp.calcular();
    this.resultadoTexto = this.objOp.sumas;
  }
}
