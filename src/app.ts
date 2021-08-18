class Department {
    name: string;
    constructor(n: string){
        this.name = n
    }

    //additonal type safety using this
    describe(this: Department){
        console.log('Department : ', this.name)
    }
}

const accounting = new Department("Accounting")
const copiedAccounting = { name: "Pandu", describe: accounting.describe}
copiedAccounting.describe()