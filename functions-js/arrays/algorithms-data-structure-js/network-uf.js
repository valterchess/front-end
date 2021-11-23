/***************************************************************
 * Esse é um exemplo de conjunto simples de funções responsáveis
 * por uma conexão do tipo união e busca (Union Find)
 * são funções simples, mas que podem ajudar superficialmente 
 * no entendimeto inicial em estrutras de dados.
 * 
 * *************************************************************
 * 
 * Obs: não fiz teste com arrays de valores não inteiros
 * Mas pode ser interessante aplicar essas
 * funções com pequenas alterações em uma String, por exemplo.
 * 
 * *************************************************************
 */

//constroi e retorna um array de inteiros de tamanho n
function networkUF(n) {
    const id = new Array()
    for (let i = 0; i < n; i++){
        id[i] = i}
    return id
};

//faz a conexão de dois pontos p e q em um array
function union(p, q, arr){
    let idp = arr[p]
    let idq = arr[q]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == idp) arr[i] = idq
    }
};

/**
 * verifica se dois pontos p e q, em determinado array
 * estão conectados.
 * e retorna true se estiverem
 * e false se não estiverem.
 */
function connected(p, q, arr) {return arr[p] == arr[q]};

//Exeplos de uso:

// arr recebe um array de tamanho 8
const arr = networkUF(8);

//faz a união das posições 1 e 4 no array
union(1, 4, arr);

/**
 * retorna false ou true, dependendo do resultado da função.
 * ou seja, caso haja a conexão entre os dois pontos retorna true
 * se não retorna false.
 */
console.log(connected(1, 4, arr));
console.log(connected(1, 2, arr));

//recebe um valor diferente de acordo com a função
const conectados = (connected(1,4, arr)) ? "conectados" : "não conectados";
const naoConectados = (connected(2,4, arr)) ? "conectados" : "não conectados";
console.log(conectados);
console.log(naoConectados);

/**
 * conectando os valores que não estavam conectados
 * veja que ao conectar o valor da posição 2 ao valor da posição 4
 * o valor da posição 2 também estará
 *  automaticamente conectado ao valor da poisção 1
 */
union(4, 2, arr);
console.log(connected(2,4,arr));
/**
* veja no resutado que,
* apesar de não conectarmos o valor da posição 2
* diretamente ao valor da posição 1
* ainda assim, ele ira retornar verdadeiro
**/
console.log(connected(1,2,arr));

/************************************************************************
* 
* Em uma reprodução simplória o que acontece gráficamente é o seguinte.
*
************************************************************************** 
*
* 0 - 1 - 3 - 5 - 6 - 7
*     |
*     4
*     |
*     2
*
*********************************************************************************
* 
* se conectarmos mais um valor a posição 4, por exemplo o 6. Ocorrera o seguinte.
*
*********************************************************************************
* 
* 0 - 1 - 3 - 5 - 7
*     |
*     4
*     |\
*     | \
*     2  6
* 
*/

/**
 * agora retornemos o valor da posição 1, 2 e 4 do array de exemplo
 * nesse caso o valor retornado é sempre o valor da ponta
 */
union(4,6,arr);
console.log(`conexão entre 2 e 6: ${connected(2,6,arr)}`)

function getNode(p, array){return array[p];}