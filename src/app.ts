interface Named {
    readonly name: string;
}
interface Greetable extends Named {
    greet(phrase: string): void;
}
class Person implements Greetable {
    age = 30;
    constructor(public name: string){
        this.name = name
    }

    greet(phrase: string){
        console.log(phrase + ' ' + this.name)
    }
}

let user1: Greetable;
user1 = new Person('Raman')
user1.greet("Hi I am ")