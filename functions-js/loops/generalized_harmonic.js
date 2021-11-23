function genHarmonic(number,r,array){
    let h = 0.0;

    if (number == 0) array.push(h);
    else if(number < 0) number = Math.abs(number);

    for(let i = 1; i <= number; i++){
        h = 1 / (i**r);
        array.push(h);
    }
}
let harmonics = [];
genHarmonic(-18,3,harmonics);

for (const element of harmonics) {
    console.log(element);
}