// type Point = {
//   x: number;
//   y: number;
// };
var pt = { x: 1, y: 2 };
var thomas = {
    id: 234245,
    first: "Thomas",
    last: "Hartmann",
    nickname: "Tom",
    sayHi: function () { return "Hi!"; }
};
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.1));
