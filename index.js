
//use of some()


var array = [1, 2, 3, 4, 5];

var even = function (element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(even(2));



console.log(array.some(even));
// expected output: true