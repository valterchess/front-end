function randomWalker(r){
let x = 0, y = 0;
let steps = 0;
    if (r > 0){
        while (Math.abs(x) + Math.abs(y) <= r) {
            let random = Math.random();
            console.log(`(${x},${y})`);
            if (random <= 0.25) x++;
            else if (random <= 0.5) y++;
            else if (random <= 0.75) x--;
            else y--;
            steps ++;
        }
        return `steps: ${steps - 1}`;
    }
    else {
        return `(${x},${y})\nO `;
    }
    
    
}
console.log(randomWalker(0));