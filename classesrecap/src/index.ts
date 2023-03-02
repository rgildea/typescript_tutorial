// class Player {
//   readonly first: string;
//   readonly last: string;
//   private score: number = 0;

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }

//   secretMethod() {
//     console.log("I'm a secret method");
//   }
// }
class Player {
  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {}

  secretMethod() {
    console.log("I'm a secret method");
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  get score() {
    return this._score;
  }
  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score must be positive");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 9999999;
  }
}

var elton = new SuperPlayer("Elton", "Steele", 100);
console.log(elton.score);

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  print() {
    console.log(`${this.color} ${this.brand} jacket.`);
  }
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log("HELLO");
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay() {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hours: number
  ) {
    super(first, last);
  }
  getPay() {
    return this.hourlyRate * this.hours;
  }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "Billerson", 80, 40);
console.log(bill.getPay());
