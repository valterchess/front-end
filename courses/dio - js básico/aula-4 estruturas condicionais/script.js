//estruturas de decisão

/*
var jogador1 = 0;
var jogador2 = 0;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log("jogadores são válidos") : console.log("jogadores inválidos")

    if (jogador1 > 0 && jogador2 == 0){
        console.log("jogador 1 marcou ponto");
        placar = jogador1 > jogador2;
    }else if (jogador2 > 0 && jogador1 == 0){
        console.log("jogador 2 marcou ponto");
        placar = jogador2 > jogador1;
    }else{
        console.log("niguém marcou ponto");
    }

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log("jogador 1 ganhou");
        break;
    case placar = jogador2 > jogador1:
        console.log("jogador 2 ganhou");
        break;
    default:
        console.log("empate");
        break;
}*/

let array = ["valor1","valor2","valor3","valor4","valor5"];

let object = {
    propriedade1: "valor1",
    propriedade2: "valor2",
    propriedade3: "valor3"
}

//executa uma condição até que ela seja falsa
/*for (let i = 0; i < array.length; i++) {
    console.log(i);
}*/


// for/in executa repetição a partir de uma propriedade
// com array
/*for(let i in array){
    console.log(i);
}
//com object
for(i in object){
    console.log(i);
}*/

//for/of executa repetição a partir de valor
//com array
/*for (i of array) {
    console.log(i)
}

//com object
//não é comum o uso do for/of com objetos porque as prorpiedades variam
for(i of object.propriedade1){
    console.log(i);
}*/

var a = 0;

while(a < 10){
    a++;
    console.log(a);
}

do {
    a++
    console.log(a)
}while (a < 10);