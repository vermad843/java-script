
// use of includes('');


const generes = ['jazz', 
                 'metal-core',
                 'punk',
                 'ska-core',
                 'vaporwave',
                 'country-core'];

const endWithCore = generes.filter((gener) => {
  return gener.includes('-core');
});


console.log(endWithCore);

// [ 'metal-core', 'ska-core', 'country-core' ]






// new Date() operator :
const date = new Date();
date.getHours() % 12 ;

console.log(date);//time






// String.prototype.replace()

// g = global, match all instances of the pattern in a string, not just one
// i = case-insensitive (so, for example, /a/i will match the string "a" or "A".
// gi : global insensitive


// 
var p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

var regex = /dog/gi;

console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"




// Regex
var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);//Smith, John








// use case of String.prototype.split()
// it returns the array 
var str = 'The quick brown fox jumps over the lazy dog.';

// no space means a letter 
var chars = str.split('');
console.log(chars[8]);
// expected output: "k"

// single space means a word
var words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

// double space means copy the array 
var space = str.split('  ');
console.log(space)//[''The quick brown fox jumps over the lazy dog.']


// copy the entire thing in an array
var strCopy = str.split();
console.log(strCopy);//[''The quick brown fox jumps over the lazy dog.']





// join
let  elements1 = ['Fire', 'Air', 'Water'];

console.log(elements1.join());
// expected output: Fire,Air,Water

console.log(elements1.join(''));
// expected output: FireAirWater

console.log(elements1.join('-'));
// expected output: Fire-Air-Water


console.log(elements1.join(' '));
// expected output: Fire Air Water







// String.prototype.concat()
// adding two strings 
var str1 = 'Hello';
var str2 = 'World';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(' ', str1));
// expected output: "World, Hello"

console.log(str2.concat(' #hey, ', str1));//World #hey, Hello






// .match : it is a method 
// Cache.match()

// here it gives all the occurence of pizza 
const checking = "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza".match(/pizza/g);

console.log(checking);//['pizza','pizza','pizza']




// here it only gives the index of last occurring pizza 
// which is  9 
const checking1 = "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza".match('pizza');

console.log(checking1);//['pizza' , index : 9 ]





// 


let  elementOfArray = ['Fire', 'Air', 'Water'];

console.log(elementOfArray.join());
// expected output: Fire,Air,Water

console.log(elementOfArray.join(''));
// expected output: FireAirWater

console.log(elementOfArray.join('-'));
// expected output: Fire-Air-Water


console.log(elementOfArray.join(' '));
// expected output: Fire Air Water






// use of slice()

let strValue = 'The quick brown fox jumps over the lazy dog.';

console.log(strValue.slice(31));//start with 31 index
// expected output: "the lazy dog."

console.log(strValue.slice(4, 19)); //start with 4th index till 19 index
// expected output: "quick brown fox"

console.log(strValue.slice(-4)); //give last 4 character from last
// expected output: "dog."

console.log(strValue.slice(-9, -5));//letters between -5 to -9 from last  
// expected output: "lazy"



//  JavaScript String charCodeAt() Method
// a= 97, b = 98, c=99, d =100 and son on...
// charCodeAt() == charCodeAt(0);
// charCodeAt() - 96 = 1, charCodeAt(1) - 96 = 2 and so on...


var str = "abcdefghijklmnopqrstuvwxyz";
var n = str.charCodeAt(0);

console.log(n);//97





// Number.prototype.toString()
// gives a value in binary value : 0 and 1's.

// (42).toString(2);     // "101010" (binary)
// (13).toString(8);     // "15"     (octal)
// (0x42).toString(10);  // "66"     (decimal)
// (100000).toString(16) // "186a0"  (hexadecimal)


const num = 42;
const binaryValue = num.toString(2);
console.log(binaryValue);//101010




// String.prototype.padStart()
// padStart()

const str5 = '5';

console.log(str5.padStart(2, '0'));
// expected output: "05"

// (para1,para2) 
// para1 => 2 means 2 numbers in counting;
// para2 => add 0 inFront,so they become 2 numbers;





// 
const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
console.log(last4Digits);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// // expected output: "************5581"






// parseInt() ;
// /parseInt(Value, radix)
// radix()
// If the radix parameter is omitted, JavaScript assumes the following:

// If the string begins with "0x", the radix is 16 (hexadecimal)
// If the string begins with "0", the radix is 8 (octal). This feature is deprecated
// If the string begins with any other value, the radix is 10 (decimal)

let value = '10000000';
console.log(parseInt(value,2));// 128





// bitwise operator();
// toString(2) for finding its binary value

let number = 5
value = number.toString(2);
console.log(value);//101
console.log(5 & 13); // 0101 & 1101 = 0101
// expected output: 5;


console.log(5 | 13); // 0101 | 1101 = 1101
// expected output: 13


console.log(parseInt("0101",2) & parseInt("1101",2));
// expected output: 5;

console.log(5 & 13 & 3);  // 0101 & 1101 & 0011 = 0001
// expected output: 1;


// comparing 0101 & 1101
// 1 : true
// 0 : false 
// 1 & 0 => 0(false)
//  1 | 0 =>1(true) 






// 
var arr = [1, 2, 3, 4];

// fill with 0 from index 2 
console.log(arr.fill(0, 2));
// expected output: [1, 2, 0, 0]

// fill with 5 from index 1
console.log(arr.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(arr.fill(6));
// expected output: [6, 6, 6, 6]

console.log(arr.fill(0));
//[0, 0, 0, 0]






// Math.max()
console.log(Math.max(1, 3, 2));
// expected output: 3

console.log(Math.max(-1, -3, -2));
// expected output: -1

var array1 = [1, 3, 2];

console.log(Math.max(...array1));
// expected output: 3





// Math.min()
console.log(Math.min(2, 3, 1));
// expected output: 1

console.log(Math.min(-2, -3, -1));
// expected output: -3

var array1 = [2, 3, 1];

console.log(Math.min(...array1));
// expected output: 1





// endsWith()
let sentence = "Hello world, welcome to the universe.";
let ends = sentence.endsWith("universe.");
console.log(ends);//true




// 
let word = 'Mozilla';

// from  index 1 and  2 
console.log(word.substr(1, 2));
// expected output: "oz"

// from index 2 and  onwards 
console.log(word.substr(2));
// expected output: "zilla"






// use of Array 
// for something into array 
let num1 = 1;
console.log(Array(num1));
//[] empty array 





// 
let arr5 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ];

const shorten = arr5.filter(Boolean);
console.log(shorten);//All true values only






// Math.abs()
  function findDifference([i,j,k],[m,n,o]) {
    return Math.abs(i*j*k - m*n*o);
 }
 
 console.log(findDifference([3, 2, 5], [1, 4, 4]), 14);//14





//  
function getChar(c){
    return String.fromCharCode(c);
  }


console.log(getChar(55),'7')//7




// splice()


var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);


console.log(removed);//["mandarin"]
console.log(myFish);//["angel", "clown", "drum", "sturgeon"] 




// parseFloat()
function circumference(r) {
  return parseFloat(r) ;
} 


console.log(circumference('4.567'));//4.567(string to number)



// Math.ceil


console.log(Math.ceil(.95));
// expected output: 1

console.log(Math.ceil(4));
// expected output: 4

console.log(Math.ceil(7.004));
// expected output: 8

console.log(Math.ceil(-7.004));
// expected output: -7







