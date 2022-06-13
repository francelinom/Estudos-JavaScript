class Heroi {
    atacar() {
        console.log('Atacou...');
    }

    defender() {
        console.log('Defendeu!!!');
    }
}

const heroi = new Heroi();
heroi.atacar();
heroi.defender();

/** A palavra this será utilizada somente no escopo da class.
 * O que vai ser atribuido a ele será o que é passado por constructor.
 * Para utilizar o constructor tem que utilizar o new.
 */
class Heroi2 {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    atacar() {
        console.log(`O ${this.nome} Atacou...`);
    }
}

const heroi2 = new Heroi2(`Francelino`, 32);
heroi2.atacar();


/** Utilizando a palavra static, quando for chamar a class não precisa utilizar o new
 * São chamadas de funções help's e são utilizado para valor que não é aterado.
 */
class Heroi3 {
    static obterAnoNascimento(idade) {
        return 2022 - idade;
    }
}

const anoNascimento = Heroi3.obterAnoNascimento(33);
console.log(`o ano de nascimento é: ${anoNascimento}`);
