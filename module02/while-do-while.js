let termoDeParada = true;
let contador = 0;
while(termoDeParada) {
    termoDeParada = contador < 10;
    if (contador % 2 === 0) {
        console.log('Numero par', contador);
    }
    contador++;
}

do {
     console.log('Só uma vez! Pois o termo de parada é: ', termoDeParada);
} while (termoDeParada);