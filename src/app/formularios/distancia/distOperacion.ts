export class Distancia {
  s1: number = 0
  s2: number = 0
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  resultado: number =0;
  distanciaResultado: number = 0;

  calcularDistancia(): void {
    this.s1 = this.x2 - this.x1;
    this.s2 = this.y2 - this.y1;
    this.resultado= Math.sqrt(this.s1 * this.s1 + this.s2 * this.s2);
  }
}


