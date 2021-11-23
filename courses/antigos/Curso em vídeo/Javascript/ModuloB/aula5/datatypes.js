var num1 = Infinity;
var num2 = NaN;
var num3 = 3;
var bool = true;
var str = 'google';
var nulo = null;
var indefinida = undefined;
var obj = ['a','b'];

var funcao = function(){
    console.log('tipo do num1 : ' + typeof num1);
    console.log('tipo do num2 : ' + typeof num2);
    console.log('tipo do num3 : ' + typeof num3);
    console.log('tipo do bool : ' + typeof bool);
    console.log('tipo do str : '  + typeof str);
    console.log('tipo do nulo : ' + typeof nulo);
    console.log('tipo do indefinida : ' + typeof indefinida);
    console.log('tipo do obj : ' + typeof obj);
}
console.log(funcao());
console.log('tipo da funcao : ' + typeof funcao());