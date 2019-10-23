//use of find()
//it gives a single value which is nearest in case of sorted array.
// array should be sorted in a ascending order

//Array is not sorted

let array1 = [5, 12, 8, 130, 44];

let found = array1.find(function(element) {
  return element > 7;
});


console.log(found);
// expected output: 12




//sorted Array :

let array2 = [5, 8, 12, 44, 130]; 

let found2 = array2.find(function(element) {
    return element > 7 ;
  });


console.log(found2);
// expected output: 8



//find will find the single  element nearest by the condition
//which is imposed on him if the array is sorted

