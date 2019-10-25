//hasOwnProperty() : it is giving a boolean value:



const object = new Object();
object.number = 42;

console.log(object.hasOwnProperty('number'));
// expected output: true

console.log(object.hasOwnProperty('toString'));
// expected output: false

console.log(object.hasOwnProperty('hasOwnProperty'));
// expected output: false
