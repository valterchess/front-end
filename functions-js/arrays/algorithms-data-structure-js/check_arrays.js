//Removida a function RandonStrArr...

/***************************************************************
 * A function constroi um array aleatório com dois possíveis
 * valores de String e...
 * @returns 'passed' ou 'failed' de acordo com a quantidade de valores 'pass' ou 'fail' no array
 * 
 * Obs.:
 * Acredito que seja interessante inserir um looping na function
 * que compute milhares de vezes o código
 * para testar a probabilidade e a estatistica de insidências 'passed' e 'failed'
 * E sendo possível inserir um gráfico que expresse melhor o resultado.
 * 
 */
function check(){
    /* 
     * inserindo o array que estava na outra function
     * e populando o array com valores aleatórios.
     * 
     * Obs.: O número de valores pode e deve ser alterado
     * de acordo com a intenção de quem deseja aplicar a function
    */
    let arr = []
    for(let i = 0; i < 10; i++){
        let aleatory = Math.random()
        arr[i] = (aleatory < 0.5) ? 'pass' : 'fail'
    }

    //atributos de 'suporte' para a execução da function
    const halfLength = (arr.length / 2)
    let suportArr = []

    /**
     * simplificando com o foreach.
     * Anteriormente aqui havia um for de 3 atributos comum
     */
    arr.forEach(element => { 
        if (element === 'pass'){
            suportArr.push(element)
        }
    })
    //código foi simplificado com o operador ternário
    return (suportArr.length > halfLength) ? 'passed' : 'failed'
};
console.log(check());

/***
 * function check2(), 
 * function original da Grasshopper course JavaScript. 
 * Lição: 'everything or nothing'.
 * 
 * import {testResults} from
 * 'grasshopper.laboratory';
 */
 function check2(results){
       for (var element of results){
           if (element === 'fail') {
           return 'failed';
           }
       }
       return results.lenght;
  };
 