const carros = [
    carro1 = {nome: "Lamborghini", preco: 1000000},
    carro2 = {nome: "Jipe", preco: 46000},
    carro3 = {nome: "Brasília", preco: 16000},
    carro4 = {nome: "Smart", preco: 46000},
    carro5 = {nome: "Fusca", preco: 17000},
]
let mais_barato = 0;
for (let i = 0; i < carros.length; i++) {
    if(carros[i].preco < carros[mais_barato].preco) mais_barato = i;
}
console.log(`${carros[mais_barato].nome} é o carro mais barato custando ${carros[mais_barato].preco}`)