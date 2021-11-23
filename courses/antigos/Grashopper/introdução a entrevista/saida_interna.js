let numbers = [2, 3, 5];

function sum(numArr){
    let sum = 0;
    for (const element of numArr) {
        sum += element;
    }
    return `the sum of elements of array is: ${sum}`;
}
console.log(sum(numbers));