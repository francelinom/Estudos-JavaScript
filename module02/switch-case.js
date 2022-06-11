/** Utilizando require para capturar os eventos */
const readLine = require("readline");
const terminal = readLine.createInterface({
  /** Defirnir o modo de entrada via terminal */
  input: process.stdin,
  /** Todo o texto dse saida sairá no terminal */
  output: process.stdout,
});

/** Definindo o texto do menu */
const textoMenu = `
Olá, seja bem vindo ao sistema de media
Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu de Herois
Digite 3 para acessar o menu de Guerreiros
Digite 0 para sair
`;

/*
console.log('textoMenu', textoMenu);
const opcao = 2;
switch(opcao) {
    case 1:
        console.log('Pressionou 1');
        break;
    case 2:
        console.log('Pressionou 2');
        break;
    default:
        console.log('Opção inválida');
        break;
}


terminal.question('Qual é o seu nome?', (msg) => {
    console.log('Você escreveu', msg);
    terminal.close();
});
*/

const questoes = {
  menuInicial: {
    text: textoMenu,
    fn: menuInicial,
  },
  opcao1: {
    texto: "Submenu! Pressione enter para selecionar mais opções...",
    fn: opcao1,
  }
};

function opcao1(msg) {
    console.log('Não tem mais opção!');
    terminal.close();
}

function menuInicial(msg) {
  const opcao = Number(msg);
  if (isNaN(opcao)) {
    throw new Error("Não é um numero", msg);
  }
  switch (opcao) {
    case 0:
      console.log("Saindo...");
      terminal.close();
      break;
    case 1:
      console.log("Menu Inicial");
      terminal.question(
        questoes.opcao1.texto,
        questoes.opcao1.fn
      )
      break;
    case 2:
      console.log("Menu de Herois");
      break;
    case 3:
      console.log("Menu de Guerreiros");
      break;
    default:
      console.log("Opção Inválida!");
      terminal.close();
      break;
  }
}

terminal.question(questoes.menuInicial.text, questoes.menuInicial.fn);
