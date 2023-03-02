"use strict";

class Player {
    static description = "A player in a game";
    #score = 0;
    #numLives = 10;
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.#secret();
    }

    get fullName() {
        return `${this.first} ${this.last}`;
     };   

     set fullName(newName) {
        const [first, last] = newName.split(" ");
        if (first && last) {
            this.first = first;
            this.last = last;
        } else {
            throw new Error("Invalid name");
        }
     }


    get score() {
        return this.#score;
    }

    set score(newScore) {
        if(newScore < 0 ) {
            throw new Error("Score must be positive");
        }
        this.#score = newScore;
    }

    updateScore(newScore) {
        this.#score = newScore;
    }

    getNumLives() {
        return this.#numLives;
    }

    taunt(){
        console.log("You can't beat me!");
    }

    loseLife(){
        this.#numLives -= 1;
    }

    #secret() {
        console.log("SECRET!!!!!");
    }
}

class AdminPlayer extends Player {
    constructor(first, last, powers) {
        super(first, last);
        this.powers = powers;
    }
    isAdmin = true;

    taunt() {
        console.log("I am the admin and I will win!");
    }
}
const admin = new AdminPlayer("admin", "admin", ["fly", "invisibility"]);
const player1 = new Player("blue", "steele");
const player2 = new Player("charlie", "brown");
player1.taunt();
console.log(player1.score);
player1.updateScore(28);
console.log(player1.score);

const players = [player1, player2, admin];

players.forEach((player) => {
    player.taunt();
}   );