function onLoad() {
    const dependencias = {
        tela: Tela, //a classe Tela é global
        util: Util
    }
    // inicializando o jogo da memoria
    const jogoDamemoria = new JogoDaMemoria(dependencias);
    jogoDamemoria.inicializar();
}

window.onload = onLoad;