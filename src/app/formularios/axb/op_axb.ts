export class axb {
  public a: number = 0;
  public b: number = 0;
  public resultado: number = 0;
  public sumas: string = '';

  calcular(): void {
    this.resultado = 0;
    this.sumas = '';

    for (let i = 0; i < this.a; i++) {
      this.resultado += this.b;
      this.sumas += this.b;
    }


    this.sumas += ' = ' + this.resultado;
  }
}
