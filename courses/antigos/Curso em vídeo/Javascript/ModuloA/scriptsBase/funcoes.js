//tipos de funções: Realizar uma tarefa, não devolve nada
function dizerNome(){
    console.log('Valter');
}

dizerNome();
// faz um calculo ou operação e retorna algo
function mutiplicarPorDois(valor) {
    return valor * 2;
}

//console.log(mutiplicarPorDois(4));

let resultado = mutiplicarPorDois(5);

console.log(resultado);

//operadores lógicos;
//aritiméticos(matemáticos);
//atribuição;
//comparação;
//operadores BitWise

let salario = 100;

// + , - , * , / , **

//console.log(salario + salario);
//console.log(salario - salario);
//console.log(salario / salario);
//console.log(5 ** 2);

// ++ --

let idade2 = 18;

console.log(--idade2);

//operadores de igualdade
//igualdade estrita
// console.log (1 === 1)
//console.log (1 === '1')

//igualdade solta
console.log(1 ==1 );
console.log('1' == '');

//operador ternário

let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo)

//operadores lógicos

