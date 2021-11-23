const r = 5, trials = 1000000;

function randomWalkers(r, trials) {
     
    let  x, y, steps = 0;
    let total = 0;
    
    //random = Math.random();
    for (let i = 0; i <= trials && r != 0; i++){
        x = 0, y = 0;
        
        while (Math.abs(x) + Math.abs(y) <= r) {
            let random = Math.random();
           if (random <= 0.25) x++;
           else if (random <= 0.5) y++;
           else if (random <= 0.75) x--;
           else y--;
           steps ++;
        }
        total += (steps - 1);
        steps = 0;
    }
    const everange = total / trials;
    console.log(total);
    return `A média de passos dos andarilhos é: ${everange}`
}

console.log(randomWalkers(5,100000));