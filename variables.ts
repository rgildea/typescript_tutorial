
export {};
let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = "zero";

let gameOver: boolean = false;
gameOver = true;
// gameOver = "true";


// Type Inference
let tvShow = "Olive Kitteridge";

let isFunny = false;
isFunny = true;
// isFunny = "asd";

// The Any Type
let thing: any = "hello";
thing = 1;
thing = false;
thing = ["foo"];
thing();
thing.toUpperCase();

const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie: string;

for(let movie of movies) {
    if(movie === "Amadeus") {
        foundMovie = "Amadeus";
    }
}

// foundMovie();
// foundMovie = 1;
// foundMovie.asjidfsdklf();