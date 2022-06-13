const Matematica = require("./matematica");
/*
console.log(Matematica.somar(1, 5));
console.log(Matematica.multiplicar(5, 5));
*/

const readline = require('readline');
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

terminal.question('Insira o primeiro valor\n', valor1 => {
    terminal.question('Insira o segundo valor\n', valor2 => {
        terminal.question('Insira a opeção\n', tipoOperacao => {
            const resultado = Matematica[tipoOperacao](
                Number(valor1), Number(valor2)
            )
            console.log(
                `A operação ${tipoOperacao} de ${valor1} e ${valor2} é ${resultado}`
            )
        })
    });
});