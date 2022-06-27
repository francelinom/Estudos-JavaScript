class JogoDaMemoria {
    constructor({ tela }) {
        /**
         * Se mandar um obj = { tela: 1, idade: 2, etc: 3}
         * vai ser ignorado o resto das propriedades e pegar a propriedade tela
         */
        this.tela = tela;

        this.heroisIniciais = [
            { img: './arquivos/batman.png', name: 'batman'},
            { img: './arquivos/batman2.png', name: 'batman2'},
            { img: './arquivos/captain_america.png', name: 'captain_america'},
            { img: './arquivos/flash.png', name: 'flash'},
            { img: './arquivos/minion.png', name: 'minion'},
            { img: './arquivos/spider_man.png', name: 'spider_man'},
        ]
    }
    // Para usar o this, não pode usar o static!
    inicializar() {
        /**
         * Vai pegar todas as funções da classe tela!
         * coloca todos os herois na tela
         */
        this.tela.atualizarImagens(this.heroisIniciais);
    }
}