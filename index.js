//hasOwnProperty() : it is giving a boolean value:


const object = new Object('number');
object.number = 42;

console.log(object.hasOwnProperty('number'));
// expected output: true

object.toString = 'hey';
console.log(object.hasOwnProperty('toString'));
// expected output: true

console.log(object.hasOwnProperty('hasOwnProperty'));
// expected output: false


// new operator : Creates a blank, plain JavaScript object;


function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var car = new Car('Eagle', 'Talon TSi', 1993);

console.log(car.make);
// expected output: "Eagle"

