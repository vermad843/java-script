
// Switch can be used in place of if,else if ,else

function animalNames(val) {
  let answer = "";
  switch(val) {
    case "a":
      answer = "apes";
      break;
    case "b":
      answer = "bird";
      break;  
    case "c":
      answer = "cat";
      break;
    case "d":
      answer = "dog";
      break;  
    default: 
      answer = "stuff";
      break;       
  }
  return answer;
}


function animalNames(val) {
  if(val == "a") {
    return "apes";        
  }else if(val =="b" ) {
   return "bird";
  }else if(val == "c") {
    return "cat";
  }else if(val == "d") {
    return "dog";
  }else {
    return "stuff";
  }
}










console.log(animalNames("a"));
console.log(animalNames("b"));
console.log(animalNames("c"));
console.log(animalNames("d"));
console.log(animalNames("e"));

