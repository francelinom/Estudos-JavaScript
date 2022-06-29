class JogoDaMemoria {
    constructor({ tela }) {
        /**
         * Se mandar um obj = { tela: 1, idade: 2, etc: 3}
         * vai ser ignorado o resto das propriedades e pegar a propriedade tela
         */
        this.tela = tela;

        this.heroisIniciais = [
            { img: './arquivos/batman.png', nome: 'batman'},
            { img: './arquivos/batman2.png', nome: 'batman2'},
            { img: './arquivos/captain_america.png', nome: 'captain_america'},
            { img: './arquivos/flash.png', nome: 'flash'},
            { img: './arquivos/minion.png', nome: 'minion'},
            { img: './arquivos/spider_man.png', nome: 'spider_man'},
        ]
        this.iconePadrao = './arquivos/padrao.png';
        this.heroisEscondidos = [];
        this.heroisSelecionados = [];
    }
    // Para usar o this, não pode usar o static!
    inicializar() {
        /**
         * Vai pegar todas as funções da classe tela!
         * coloca todos os herois na tela
         */
        this.tela.atualizarImagens(this.heroisIniciais);

        // força a tela a usar o THIS de Jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this));
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
    }
    embaralhar() {
        const copias = this.heroisIniciais
                .concat(this.heroisIniciais)// cuplicar os itens
                .map(item => {
                    return Object.assign({}, item, { id: Math.random() / 0.5 })
                })
                .sort(() => Math.random() - 0.5)
        
        this.tela.atualizarImagens(copias);

        // vai esperar 1 segundo para atualizar a tela
        setTimeout(() => {
            this.esconderHerois(copias);
        }, 1000)

    }
    esconderHerois(herois) {
        /** 
         * Vai trocar a imagem de todos os herois existentes
         * pelo icone padrão.
         * Vai extrair somente o necessário.
         * Usando a sintaxe ({ chave:1 }) estamos falando que vamos retornar o que estiver
         * dentro dos parenteses.
         * Quando não utilizamos: (exemplo do id), o JS entende que o nome é o mesmo do valor.
         * Ex.: id: id, vira id.
         */
        const heroisOcultos = herois.map(({nome, id}) => ({
            id,
            nome,
            img: this.iconePadrao
        }))
        // atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos);
        // guardamos os herois para trabalhar com eles depois
        this.heroisOcultos = heroisOcultos;
    }
    verificarSelecao(id, nome) {
        const item = {id, nome}
        /**
         * Verificar se a quantidade de herois selecionados e 
         * tomar a ação se escolheu certo ou errado.
         */
        const heroisSelecionados = this.heroisSelecionados.length;
        switch(heroisSelecionados) {
            case 0:
                // Adiciona a escolha na lista, esperando pela proxima clicada
                this.heroisSelecionados.push(item);
                break;
            case 1:
                /**
                 * Se a quantidade for 1, significa que o usuário só pode escolher mais um
                 * vai obter o primeiro item da lista 
                 */
                const [opcao1] = this.heroisSelecionados
                // Zerar itens para não selecionar mais de dois
                this.heroisSelecionados = [];
                // Conferir se os nomes e os id's são iguais
                if (opcao1.nome === item.nome && opcao1.id !== item.id) {
                    alert('combinação correta!' + item.nome)
                    return
                }
                alert('Combinação incorreta!');
                break;

        }
    }
    jogar() {
        this.embaralhar();
    }
}