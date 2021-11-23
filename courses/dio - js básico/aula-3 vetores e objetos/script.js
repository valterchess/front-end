/* o que são vetores ou arrays
console.log(array);

let array1 = ["string", 1, true, ["array1"],["array", "obj", array]];

//foreach
array1.forEach(function(item, index) {
    console.log(item,index)
});

//.push(...) adiciona um novo valor no  final do array
array1.push("novo item");

//.pop() remove o valor da ultima posição do array
array1.pop();

//.shift() remove o valor da primeira posição do array
array1.shift();

//.unshift() adiciona um novo elemento na primeira posição do array
array1.unshift("novo item no inicio do array");

//.indexOf() retorna o indice do array onde se encontra o valor informado
console.log(array1.indexOf(true));

//.splice(0,3) remove ou substitui um item pelo indice
array1.splice(0,3);

//.slice(0,3) retorna uma parte de um array já existente
let array2 = array1.slice(0,3);*/

let array = ["string", 1, true];

//OBJETOS

let object = {
    string: "string",
    boolean: true,
    array: array,
    objectInterno: {
        objectInterno:"objeto interno"
    }
}
/*console.log(object.objectInterno);

var string = object.string;

var arrayInterno = object.array;
console.log(arrayInterno)*/

var {string, boolean} = object;




