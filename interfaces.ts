// type Point = {
//   x: number;
//   y: number;
// };

// const pt: Point = { x: 1, y: 2 };

interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 1, y: 2 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  //   sayHi: () => string;
  sayHi(): string;
}

const thomas: Person = {
  id: 234245,
  first: "Thomas",
  last: "Hartmann",
  nickname: "Tom",
  sayHi: () => "Hi!",
};

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number): number {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.1));

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Elton",
  age: 3,
  breed: "Australian Shepherd",
  bark: () => "WOOF WOOF",
};

interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4,
  breed: "Labrador",
  bark() {
    return "bark!";
  },
  job: "guide dog",
};

interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: "Pierre",
  id: 123,
  email: "pierre@gmail.com",
  level: "senior",
  languages: ["JS", "TS", "Python"],
};

interface Chicken {
  breed: string;
}

interface Chicken {
  numEggs: number;
}
