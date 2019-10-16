//console.log inside the function:

function helloWorld() {
    console.log("Hello World!!");
}

helloWorld();


//console.log outside the function:

function sum(a , b ) {
  let output= "";
  output+= a + b ;

  return output
}

console.log(sum(2,5));