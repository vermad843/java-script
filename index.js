// // use of includes('');


// const generes = ['jazz', 
//                  'metal-core',
//                  'punk',
//                  'ska-core',
//                  'vaporwave',
//                  'country-core'];

// const endWithCore = generes.filter((gener) => {
//   return gener.includes('-core');
// });

// console.log(endWithCore);

// // [ 'metal-core', 'ska-core', 'country-core' ]




// new Date() operator :


// const date = new Date();
// date.getHours() % 12 ;

// console.log(date);//


// 

// String.prototype.replace()

// g = global, match all instances of the pattern in a string, not just one
// i = case-insensitive (so, for example, /a/i will match the string "a" or "A".
// gi : global insensitive



// var p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// var regex = /dog/gi;

// console.log(p.replace(regex, 'ferret'));
// // expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

// console.log(p.replace('dog', 'monkey'));
// // expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


// Regex

// var re = /(\w+)\s(\w+)/;
// var str = 'John Smith';
// var newstr = str.replace(re, '$2, $1');
// console.log(newstr);


// use case of String.prototype.split()
// it returns the array 

// var str = 'The quick brown fox jumps over the lazy dog.';



// // no space means a letter 
// var chars = str.split('');
// console.log(chars[8]);
// // expected output: "k"

// // single space means a word
// var words = str.split(' ');
// console.log(words[3]);
// // expected output: "fox"

// // double space means copy the array 
// var space = str.split('  ');
// console.log(space)



// // copy the entire thing in an array
// var strCopy = str.split();
// console.log(strCopy);

// .join()


let  elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: Fire,Air,Water

console.log(elements.join(''));
// expected output: FireAirWater

console.log(elements.join('-'));
// expected output: Fire-Air-Water


console.log(elements.join(' '));
// expected output: FireAirWater