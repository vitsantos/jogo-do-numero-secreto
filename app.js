// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto'

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaNumSorteados = [];
let numLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
  exibirTexto('h1', 'Jogo do número secreto');
  exibirTexto('p', 'Escolha um número entre 1 e 10');
}

mensagemInicial();


function verificarChute(){
  let chute = document.querySelector('input').value;
  
  if (chute == numeroSecreto){
    exibirTexto('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTexto('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');


  } else {
    if (chute > numeroSecreto){
      exibirTexto('p', 'O número secreto é menor.');
    } else {
      exibirTexto('p', 'O número secreto é maior.');
    }
    tentativas++;
    limparCampo();
}
}

function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random() * numLimite + 1);
  let quantidadeElementInList = listaNumSorteados.length;

  if (quantidadeElementInList == numLimite){
    listaNumSorteados = []
  }
  if (listaNumSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  } else {
    listaNumSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = ' ';
}

function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  mensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}


function fatorial(num) {
  let fat = num;
  let cont = 1;
  while (cont < num){
      fat += fat * cont;
      cont++;
      console.log(`${fat}`)
  }
}

fatorial();