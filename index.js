// difference between '==' and '===' 
// ===   10 = '10' => not equal;


function compareEquality(a , b) {
  if(a == b) {
    return " equal";
  }
  return " not Equal";
}

console.log(compareEquality(10, '10'));