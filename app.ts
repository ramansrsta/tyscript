type Person = { name: string, age: number }

const greeting = ( person: Person ) => {
    console.log("Hi my name is : ", person.name)
}

greeting({name: 'Baal',age:  47})