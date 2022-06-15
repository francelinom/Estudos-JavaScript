const fs = require("fs");
fs.readFile("./arquivo01.txt", (error, resposta) => {
  if (error) {
    console.error("deu ruim...", error.stack);
    return;
  }
  console.log("resposta", resposta.toString());
});

fs.readFile("./arquivo01.txt", (errorArq1, resposta1) => {
  if (errorArq1) {
    console.log("deu ruim no arquivo 1", errorArq1);
  }

  fs.readFile("./arquivo02.txt", (errorArq2, resposta2) => {
    if (errorArq2) {
      console.error("deu ruim no arquivo 2", errorArq2);
    }

    fs.readFile("./arquivo03.txt", (errorArq3, resposta3) => {
      if (errorArq3) {
        console.error("deu ruim arquivo 3", errorArq3);
      }
      const conteudo = `
      - ${resposta1} \n
      - ${resposta2} \n
      - ${resposta3} \n
      `;

      fs.writeFile("./final.txt", conteudo, (errorWrite, respostaWrite) => {
        if (errorWrite) {
          console.error("deu ruim na gravação", errorWrite);
          return;
        }
        console.log("Gravouuuuu");
      });
    });
  });
});
