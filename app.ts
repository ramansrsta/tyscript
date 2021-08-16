const add = (n1: number, n2: number, printRes: boolean, resStr: string) => {
    let result = n1 + n2;
    if(printRes){
        console.log(resStr + result)
    }else{
        return
    }
}

let n1 = 47, n2 = 57, printRes = true, resStr = "And the Fianl Result is : "
add(n1,n2,printRes,resStr)