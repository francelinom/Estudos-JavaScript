let frutasExistenteNoMercado = false;
let temCPUSuficiente = true;

/** Obter valores do terminal */
const args = process.argv;
const saldo = args[args.length - 1];

/** Condição com o isNaN vai verificar se é um valor number */
if (isNaN(saldo)) {
    console.log('Valor invalido!!!');
    return;
}

console.log('args', args);
console.log('saldo', saldo);

let tipoCliente = 'Premium';
if(saldo < 9) {
    tipoCliente = 'Basic';
}
else if (saldo >= 10 && saldo < 20) {
    tipoCliente = 'Gold'
}
else {
    tipoCliente = null;
}

/** Se o tipo for null, undefined, vazio ou 0 o tipo vai ser === false */
if (!tipoCliente) {
    tipoCliente = 'indefinido';
}

console.log('tipoDoCliente', tipoCliente);

const operadorOu = 1 > 2 || 2 > 1;
const operadorE = 1 === 1 && 2 !== 2;
const operadorNot = !(1 == 1);

const idade = 17;
const resultado = idade >= 18 ? 'Pode dirigir!' : 'Não pode dirigir!';
console.log(resultado);