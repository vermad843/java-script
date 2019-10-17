//global variable : 

// var inside the function has given priority then global var

let outerWear = "T-Shirt";

function myOutfit() {
  let outerWear = "sweater"; 
  
  return outerWear;
}

console.log(myOutfit());
console.log(outerWear);
