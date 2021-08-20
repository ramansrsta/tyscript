interface Bird {
    type: 'bird',
    flyingSpeed: number
}

interface Horse {
    type: 'horse',
    runningSpeed: number
}

type Animal = Bird | Horse;

function animal(animal: Animal){
    let speed: number;
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed
            break;
        case 'horse':
            speed = animal.runningSpeed
            break;
    }
    console.log('My speed is : ', speed)
}

animal({type: 'bird', flyingSpeed: 10})

interface ErrorContainer {
    [props: string] : string
}

const ErrorType: ErrorContainer = {
    name: "Error in name",
    email: "Email in Errro"
}