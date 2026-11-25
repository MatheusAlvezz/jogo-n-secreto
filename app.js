let listadeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = geradorNumeroAleatorio();
let tentativas = 1;

function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = (texto);
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
exibirNaTela('h1', 'Jogo do número secreto');
exibirNaTela('p', 'Digite um número de 0 a 100');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let contador = 0;
    if (chute == numeroSecreto) {
        exibirNaTela('h1', 'Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirNaTela('p', `o numero secreto é menor que seu chute`);
        } else {
            exibirNaTela('p', 'o numero secreto é maior que seu chute');
        }
            tentativas++;
            limparCampo()
        }
}

function geradorNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosDaLista = listadeNumerosSorteados.length;

    if (quantidadeDeElementosDaLista == numeroLimite ){
        listadeNumerosSorteados = [];
    }

    if (listadeNumerosSorteados.includes(numeroEscolhido)){
        return geradorNumeroAleatorio();
    } else {
        listadeNumerosSorteados.push(numeroEscolhido);
        console.log(listadeNumerosSorteados);
        return numeroEscolhido;
    }
}
console.log(numeroSecreto);

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = geradorNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}