const { resolve } = require("path");
const readline = require("readline");
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, msg => {
            !!msg ? resolve(msg) : reject(new Error('O campo não pode ser vazio'))
        })
    })
}

async function main() {
    try {
        const nome = await questionAsync('Qual o seu nome?');
        const telefone = await questionAsync('Qual o seu telefone?') 
        console.log(`Nome: ${nome}, Telenofe: ${telefone}`)       
    } catch (error) {
        console.log('Deu ruim***', error.stack)
    }
    finally{
        terminal.close()
    }
}

main();