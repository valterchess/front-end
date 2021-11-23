function harmonic(number, array){
    let h = 0;
    for(let i = 1;i <= number; i++) {
        h = 1/i;
        array.push(h);
        }
}
let bbc = [];
harmonic(6,bbc);
for (const element of bbc) {
    console.log(element);
}