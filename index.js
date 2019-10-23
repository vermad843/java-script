// sorting the Array(Ascending)

let array1 = [5, 12, 8, 130, 44];

array1.sort(function(a, b) {
    return a - b 
});

console.log(array1);
//expected output [5,8,12,44,130]



// sorting the Array(Descending)

let array2 = [5, 12, 8, 130, 44];


array2.sort(function(a, b) {
    return b - a  
});

console.log(array2);
//expected output [130,44,12,8,5]




//sorting alphabetically
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();   

console.log(fruits);


//reversing the sorted Array
fruits.reverse();

console.log(fruits)





