const dog = {
    name: "Elton",
    breed: "Australian Shepherd",
    age: 0.5
}

function printName(person: {first: string, last: string}): void {
    console.log(`${person.first} ${person.last}`)
}

printName({first: "Thomas", last: "Jenkins"});

// type Point = {
//     x: number,
//     y: number
// }

// {x: number, y: number}
let coordinate:Point = {x: 34, y: 2};

function randomCoordinate(): Point {
    return { x: Math.random(), y: Math.random()} ;
}

// no extra stuff with object literals
// printName({first: "Mick", last: "Jagger", age: 473});

// passing a variable it will allow extra properties
const singer = {first: "Mick", last: "Jagger", age: 473, isAlive: true};
printName(singer);


function doublePoint(point: Point): Point {
    return { x: point.x *2, y: point.y * 2 }; 
}

type Song = {
    title: string, 
    artist: string, 
    numStreams: number, 
    credits: {
        producer: string, 
        writer: string
    }
}


function calculatePayout(song: Song){
    return song.numStreams * 0.0033;
}

function printSong(song): void{
    console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = { 
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 2343254352,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
}

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);


type Point = {
    x: number;
    y: number; 
    z?: number;
}

const myPoint: Point = { x: 1, y: 3 };

type User = {
    readonly id: number;
    username: string;
}

const user: User = {
    id: 12345,
    username: "catgurl"
}

console.log(user.id);

// user.id = 2341234;

type Circle = {
    radius: number;
}

type Colorful = {
    color: string;
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow"
};

type Cat = {
    numLives: number
}

type Dog = {
    breed: string
}

type CatDog = Cat & 
    Dog & {
    age: number
};

const christy: CatDog = {
    numLives: 7,
    breed: "Husky", 
    age: 9
}

