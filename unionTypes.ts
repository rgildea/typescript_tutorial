let age: number | string = 21;

age = 23;
age = "24";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 31.231, long: 10.324 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(23);
printAge("89");

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  price * tax;
}

const stuff: (number | string)[] = [1, 2, 3, "foo"];

const coords: (Point | Loc)[] = [];
coords.push({ lat: 32.1, long: 234 });
coords.push({ x: 234, y: 3 });

let zero: 0 = 0;
let mood: "Happy" | "Sad" = "Happy";

mood = "Sad";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Wednesday";

const giveAnswer = (answer: "yes" | "no" | "maybe") => {
  return `The answer is ${answer}`;
};
