export class Zodiaco {
  nombre: string = '';
  ApPaterno: string = '';
  ApMaterno: string = '';
  Dia: number = 0;
  Mes: number = 0;
  Anio: number = 0;
  nombreCompleto: string = '';

  obtenerEdad(anio: number) {
    return 2025 - anio;
  }

  obtenerZodiacoChino(anio: number) {
    let animales = [
      "Rata", "Buey", "Tigre", "Conejo", "Dragón", "Serpiente",
      "Caballo", "Cabra", "Mono", "Gallo", "Perro", "Cerdo"
    ];

    let i = (anio - 2020) % 12;
    if (i < 0) {
      i = i + 12;
    }

    let signo = animales[i];
    return signo;
  }

  obtenerImagenZodiaco(signo: string): string {
    switch (signo) {
      case "Rata":
        return "https://www.hola.com/horizon/43/5db37370df98-rata-horoscopo-chino.jpg";
      case "Buey":
        return "https://www.hola.com/horizon/landscape/f1d1b606decd-toro-horoscopo-chino.jpg?im=Resize=(1280),type=downsize";
      case "Tigre":
        return "https://www.hola.com/horizon/landscape/97f5c03765f7-tigre-horoscopo-chino.jpg";
      case "Conejo":
        return "https://www.hola.com/horizon/landscape/9e8db141791f-conejo-horoscopo-chino.jpg";
      case "Dragón":
        return "https://www.hola.com/horizon/landscape/22c61acbffb2-dragon-horoscopo-chino.jpg";
      case "Serpiente":
        return "https://www.hola.com/horizon/43/f3716734bf9d-serpiente-horoscopo-chino.jpg";
      case "Caballo":
        return "https://www.hola.com/horizon/landscape/bf0763ab3aa2-caballo-horoscopo-chino.jpg";
      case "Cabra":
        return "https://www.hola.com/horizon/43/9d812aee23d6-cabra-horoscopo-chino.jpg";
      case "Mono":
        return "https://www.hola.com/horizon/landscape/2d10e56a60a0-mono-horoscopo-chino.jpg?im=Resize=(640),type=downsize";
      case "Gallo":
        return "https://www.hola.com/horizon/landscape/c49624adf2ee-gallo-horoscopo-chino.jpg";
      case "Perro":
        return "https://www.hola.com/horizon/landscape/c7bc2d117093-perro-horoscopo-chino.jpg";
      case "Cerdo":
        return "https://www.hola.com/horizon/landscape/634be1452678-cerdo-horoscopo-chino.jpg?im=Resize=(960),type=downsize";
      default:
        return '';
    }
  }
}
