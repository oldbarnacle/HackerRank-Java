/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  // The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
  /*
  perimeter() {
        return this.sides.reduce(function add(a,b){return a+b;})
    }
  */
  perimeter () {
      var sum = this.sides.reduce((x, y) => x + y, 0);
      return sum;
  }
  
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
