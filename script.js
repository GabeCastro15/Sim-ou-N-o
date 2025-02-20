const btnPergunta = document.getElementById('btnPergunta');
const resposta = document.getElementById('resposta');
const carta = document.getElementById('carta');
const imagemCarta = carta.querySelector('img');

const cartas = {
    SIM: ['imagens/sim/carta1.jpg', 'imagens/sim/carta2.jpg', 'imagens/sim/carta3.jpg'],
    NÃO: ['imagens/nao/carta1.jpg', 'imagens/nao/carta2.jpg', 'imagens/nao/carta3.jpg'],
    TALVEZ: ['imagens/talvez/carta1.jpg', 'imagens/talvez/carta2.jpg']
};

btnPergunta.addEventListener('click', () => {
    const indiceResposta = Math.floor(Math.random() * Object.keys(cartas).length);
    const tipoResposta = Object.keys(cartas)[indiceResposta];
    resposta.textContent = tipoResposta;

    const cartasParaResposta = cartas[tipoResposta];
    const indiceCarta = Math.floor(Math.random() * cartasParaResposta.length);
    const cartaSelecionada = cartasParaResposta[indiceCarta];
    imagemCarta.src = cartaSelecionada;
});