function onLoad() {
    const heroi = {
        img: './arquivo/batman.png',
        nome: 'batman'
    }
    const codigoHtml = Tela.obterCodigoHtml(heroi);
}

window.onLoad = onLoad;