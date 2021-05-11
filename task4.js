const fibonacciRecursion = num => {
    if(num <= 2) 
        return [1, 1].slice(0, num);
    const fibArr = fibonacciRecursion(num - 1);
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2])
    return fibArr;
};

const fibonacciLoop = num => {
    const fibArr = [1, 1].slice(0 , num);
    for(let i = 0; i < num - 2; i++)
        fibArr[i+2] = fibArr[i] + fibArr[i + 1];
    return fibArr;
} 

console.log(fibonacciLoop(1)) // 1
console.log(fibonacciLoop(5)) // 1, 1, 2, 3, 5
console.log(fibonacciLoop(8)) // 1, 1, 2, 3, 5, 8, 13, 21
console.log(fibonacciRecursion(1)) // 1
console.log(fibonacciRecursion(5)) // 1, 1, 2, 3, 5
console.log(fibonacciRecursion(8)) // 1, 1, 2, 3, 5, 8, 13, 21
