// use of **   : 2 to the power 5 ;
// Math.pow(number, 5)

const betterNumbers = [2, 13, 42];
// const squaredNumber = betterNumbers.map((number) => {
//     return number**5; 
// });


const squaredNumber = betterNumbers.map(number => {
  return Math.pow(number,5);
});

console.log(squaredNumber);



