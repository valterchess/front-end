//tipos primitivos

// boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//String
var nome = 'Valter';
console.log(typeof(nome));

//como declarar
var variavel = "Valter";
variavel = "outro valor";
console.log(variavel);

let variavel2 = "Valter";
console.log(variavel2);


const constante = "Valter";
console.log(constante);

var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal(){
    //declarada como let por convenção
    let escopoLocalInterno = "local";
    console.log(escopoLocalInterno);
}

//atribuição
var atibuicao = "Valor Qualquer";
console.log(atibuicao);
//verdadeiro
var comparacao = "0" == 0;
console.log(comparacao);

//falso
var comparacao2 = "0" === 0;
console.log(comparacao2);

var adicao =  1 + 1;
console.log(adicao);

var diferenca = 2 - 1;
console.log(diferenca);

var multiplicacao = 2 * 3;
console.log(multiplicacao);

var divisaoReal = 6 / 2;

var modulo = 5 % 2;

var potenciacao = 2 ** 10;

var maiorQue = 5 > 2;

var menorQue = 5 < 2;

var maiorOuIgual = 5 >= 2;

var menorOuIgual = 5 <= 2;

var e = true && false;

var ou = true || false;

var not = !true;