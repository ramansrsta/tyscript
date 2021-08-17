const add = (number1 : number, number2: number) : number => {
    return number1 + number2
}

const addHandle = (no1 : number, no2: number, cb: (no3: number) => void) => {
    let res = no1 + no2
    cb(res)
}

addHandle(14,27, (number) => {console.log(number)})

let printResult: (a: number, b: number) => number;

printResult = add

console.log(printResult(7 , 8))