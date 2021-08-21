function merge<P extends object, A extends object> (obj1: P, obj2: A){
    return Object.assign(obj1, obj2)
}

const objComb = merge({name: "Ram"}, {age: "23"})
console.log(objComb.name)

function extractandprint<T extends object, U extends keyof T> (obj: T, key: U){
    return 'Value is ' + obj[key]
}

console.log(extractandprint({name: 'Raja'}, 'name'))