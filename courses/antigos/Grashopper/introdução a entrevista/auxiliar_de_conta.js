const divisorCalcTax = 6.66666666666666;

function calculaTax(valor) {
    return valor / divisorCalcTax;
};

function splitBill(total,people){
    let aux = calculaTax(total); 
    total += aux;
  
    return total / people;
};
console.log(splitBill(76,4));