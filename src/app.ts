type Admin = {
    name: string;
    priviliges: string[]
}

type Employee = {
    name: string;
    department: string;
}

type AdminEmployee =  Admin & Employee;

let person : AdminEmployee;
person = {
    name: "Pandu",
    department: "IT",
    priviliges: ["Admin"]
}

console.log(person)