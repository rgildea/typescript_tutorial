function square(num: number) {
    return num * num;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {
    
}

function greet(person: string  = "stranger"): string {
    return `Hi there, ${person}!`;
}

square(3);
greet("Tonya Harding");
doSomething("ChickenFace", 76, true);

// greet();
// greet("Tony");

// const addNums = (x: number, y: number): number => {
//     return x + y;
// }

// function square(num: number) {
//     return num * num;
// }

// square(34);

// named function
function rando(num: number) {
    if(Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}

// arrow function stored in a const
const add = (x: number, y: number): number => {
    return x + y;
}

const colors = ["red", "orange", "yellow"];
colors.map(color => {
    return color.toUpperCase();
})

function printTwice(msg: string): void {
    console.log(msg);
    console.log(msg);
}

function makeError(msg: string): never {
    throw new Error(msg);
}

const gameLoop(): never => {
    while(true){
        console.log("GAME LOOP RUNNING!");
    }
}