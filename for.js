const textoPar = 'par';
const textoImpar = 'Impar';
for(let i = 0; i <= 10; i++) {
    const decisao = i % 2 === 0 ? textoPar : textoImpar;
    console.log(`O número ${i} é ${decisao}`)
}

const minhaListDeTarefas = [
    {
        id: parseInt(Math.random() * 10),
        nome: 'Fran',
        superPoder: 'veloz'
    },
    {
        id: parseInt(Math.random() * 10),
        nome: 'Saul',
        superPoder: 'força'
    }
]

for(let i = 0; i < minhaListDeTarefas.length; i++) {
    const item = minhaListDeTarefas[i];
    console.log(
        `id: ${item.id}
        nome: ${item.nome}
        superPoder: ${item.superPoder}`
    )
}

/** Não precisa de contador */
for(const i in minhaListDeTarefas) {
    const item = minhaListDeTarefas[i];
    console.log(
        `id for in: ${item.id}
        nome for in: ${item.nome}
        superPoder for in: ${item.superPoder}`
    )
}

/** Não precisa de index */
for (const valor of minhaListDeTarefas) {
    console.log(`${valor.nome} - ${valor.superPoder}`)
}