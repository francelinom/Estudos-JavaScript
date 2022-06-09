class Heroi {
    atacar() {
        console.log('Atacou...');
    }

    defender() {
        console.log('Defendeu!!!');
    }
}

class Heroi2 {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    atacar() {
        console.log(`O ${this.nome} Atacou...`);
    }
}

const heroi = new Heroi();
heroi.atacar();
heroi.defender();

const heroi2 = new Heroi2(`Francelino`, 32);
heroi2.atacar();
