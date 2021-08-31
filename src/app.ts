function Logger(loggerText: string){
    return function(constructor: Function)
    {
        console.log(loggerText)
        console.log(constructor)
    }
}
@Logger('Logging - Personal Data')
class Person {
    name = "Pandu"
    constructor(){
        console.log('Creating Class')
    }
}

let per = new Person()
console.log(per)

//

function Log(target: any, propertyname: string){
    console.log(target)
    console.log(propertyname)
    console.log('OK Tested')
}

function Log2(target: any, nameOfAccessor: string, descriptor: PropertyDescriptor){
    console.log(target)
    console.log(nameOfAccessor)
    console.log(descriptor)
    console.log('OK Tested')
}


function Log3(target: any, nameOfMethod: string, descriptor: PropertyDescriptor){
    console.log(target)
    console.log(nameOfMethod)
    console.log(descriptor)
    console.log('Method')
}

function Log4(target: any, nameOfMethodInWhichThisParamIsUsed: string, positionOfArgument: number){
    console.log(target)
    console.log(nameOfMethodInWhichThisParamIsUsed)
    console.log(positionOfArgument)
    console.log('Parameter Decorator')
}
class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(value: number){
       if(value > 0){
           this._price = value
       }else {
           throw new Error('Invalid Price')
       }
    }

    constructor(t: string, p: number){
        this.title = t
        this._price = p
    }

    @Log3
    getPriceWithTax(@Log4 tax: number){
        return this._price * (1 + tax)
    }
}