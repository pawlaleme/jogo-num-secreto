let lista = [];
let numLimite = 10;
let numSecreto = geradorNumAleatorio();
let tentativa = 1;

console.log(numSecreto);
function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female');
}
function dash() {
    exibirTextoTela('h1', 'Jogo do número secreto');
    exibirTextoTela('p', 'Escolha um número entre 1 e 10');

}
function geradorNumAleatorio() {
    let numEscolhido = parseInt(Math.random() * 10 + 1);
    let qntdNumLista = lista.length;

    if (qntdNumLista == numLimite) {
        lista = [];
    }
    if (lista.includes(numEscolhido)) {
        return geradorNumAleatorio();
    } else {
        lista.push(numEscolhido);
        return numEscolhido;

    }


}


function limpar() {
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo() {
    numSecreto = geradorNumAleatorio();
    dash();
    tentativa = 1;
    limpar();
    console.log(numSecreto);

}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numSecreto) {
        exibirTextoTela('h1', 'ACERTOU!');
        let palavra = tentativa > 1 ? 'tentativas' : 'tentativa';
        let msgTentativa = `Voce descobriu o número secreto! Com ${tentativa} ${palavra}`
        exibirTextoTela('p', msgTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        console.log(msgTentativa);
    } else {
        if (chute > numSecreto) {
            exibirTextoTela('p', 'O numero secreto é menor!');
        } else {
            exibirTextoTela('p', 'O numero secreto é maior!')
        }
        tentativa++;
        limpar();
    }

}
dash();

