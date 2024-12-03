const add = (number1 : number, number2: number) : number => {
    return number1 + number2
}

let printResult: (a: number, b: number) => number;

printResult = add

console.log(printResult(7 , 8))