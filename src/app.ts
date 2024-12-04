class Department {
    protected employees: string [] = [];

    constructor(public name: string){
        this.name = name
    }

    //additonal type safety using this
    describe(this: Department){
        console.log('Department : ', this.name)
    }

    addEmployees(employee: string){
        this.employees.push(employee)
    }

    printEmployees(){
        console.log(this.employees)
    }
}

class Accounting extends Department {
    private text:string;

    get privateText(){
        return console.log(this.text)
    }

    set setPrivateText(text: string){
        this.text = text
    }

    constructor(public admins: string[]){
        super("Accounting");
        this.admins = admins
        this.text = "HUmma"
    }

    printAdmins() {
        console.log("Admins : " , this.admins)
    }

    addEmployees(name: string){
        console.log('Huhahahah', name)
    }
}

const accounting = new Accounting(["dilbar", "dilbar"])
accounting.addEmployees('Chinku')
accounting.printEmployees()
accounting.printAdmins()
accounting.privateText
accounting.setPrivateText = "Ok tested"