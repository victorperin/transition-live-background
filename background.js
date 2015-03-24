var cores = new Array(
  [50,124,203],
  [60,180,120],
  [54,68,83],
  [45,175,230],
  [139,166,173],
  [186,186,186]
);
var taxaAtualizacao = 20; //configuração de fps (default, atualiza a tela a cada 0.02 segs)
var somaTransicao = 0.02; //soma de transição, a cada taxa de atualização soma o numero à cor


//Indices de cores organizado em um array bidimensional:
// quando indicesCores[0][x] >>> é relcionado a cores da direita
// quanto indicesCores[1][x] >>> é relcionado a cores da esquerda
// em contrapartida
// quanto indicesCores[x][0] >>> é referente a cor atual
// quanto indicesCores[x][1] >>> é referente a próxima cor
//
// Então, indicesCores[1][1] >>> é referente à próxima cor da esquerda
var indicesCores = [[0,0],[0,0]];
var passo = 0;
//pega uma cor aleatória e define como cor atual e próxima cor dos passos
indicesCores[0][0] = Math.floor( 1 + Math.random() * (cores.length - 1)) % cores.length;
indicesCores[0][1] = Math.floor( 1 + Math.random() * (cores.length - 1)) % cores.length;
indicesCores[0][0] = Math.floor( 1 + Math.random() * (cores.length - 1)) % cores.length;
indicesCores[1][1] = Math.floor( 1 + Math.random() * (cores.length - 1)) % cores.length;

//Velocidade de Transicao


function atualizarGradiente(){
  //aqui é realmente inserido o array da cor (por exemplo a primeira cor colocada no array), array bidimensional da mesma forma que o indicesCores, mas com um array dentro, tornando um array tridimensional
  var cor = [[[0,0,0],[0,0,0]],[[0,0,0],[0,0,0]]];

  cor[0][0] = cores[indicesCores[0][0]];
  cor[0][1] = cores[indicesCores[0][1]];
  cor[1][0] = cores[indicesCores[1][0]];
  cor[1][1] = cores[indicesCores[1][1]];

  var istep = 1 - passo;
  var r1 = Math.round(istep * cor[0][0][0] + passo * cor[0][1][0]);
  var g1 = Math.round(istep * cor[0][0][1] + passo * cor[0][1][1]);
  var b1 = Math.round(istep * cor[0][0][2] + passo * cor[0][1][2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";

  var r2 = Math.round(istep * cor[1][0][0] + passo * cor[1][1][0]);
  var g2 = Math.round(istep * cor[1][0][1] + passo * cor[1][1][1]);
  var b2 = Math.round(istep * cor[1][0][2] + passo * cor[1][1][2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";


  document.getElementById("gradient").style = "background:linear-gradient(left, "+color1+" 0%, "+color2+" 100%);background:-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"));background:-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%);background:-o-linear-gradient(left, "+color1+" 0%, "+color2+" 100%);background:-ms-linear-gradient(left, "+color1+" 0%, "+color2+" 100%);";



  passo += somaTransicao;
  if ( passo >= 1 ){
    passo %= 1;
    indicesCores[0][0] = indicesCores[0][1];
    indicesCores[1][0] = indicesCores[1][1];

    //escolhe randomicamente uma próxima cor para os 2 lados
    //obs: não pega a mesma cor que a enterior
    indicesCores[0][1] = ( indicesCores[0][1] + Math.floor( 1 + Math.random() * (cores.length - 1))) % cores.length;
    indicesCores[1][1] = ( indicesCores[1][1] + Math.floor( 1 + Math.random() * (cores.length - 1))) % cores.length;

  }
}

setInterval(atualizarGradiente,taxaAtualizacao); //executa a função em looping
