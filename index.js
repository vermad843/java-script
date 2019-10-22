//array1 satisfying the condition of isBelowThreshold



function isBelowThreshold(currentValue) {
    return currentValue < 40;
  }
  
  var array1 = [1, 30, 39, 29, 10, 13];
  
  console.log(array1.every(isBelowThreshold));
  // expected output: true
  