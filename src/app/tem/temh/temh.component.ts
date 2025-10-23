import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-temh',
  imports: [],
  templateUrl: './temh.component.html',
  styleUrl: './temh.component.css'
})
export class TemhComponent {

  @Input()mensaje!:string

  @Output()mensaje2=new EventEmitter<string>();

  enviarMensaje(){
    this.mensaje2.emit("Hola desde el Hjo");
  }
}
