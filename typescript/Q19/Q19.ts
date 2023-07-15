// Testing with equality and inequality with strings
let country = 'Pakistan';
console.log("Is country equal to 'Pakistan'? I predict true.");
console.log(country == 'Pakistan');

let language = 'English';
console.log("Is language not equal to 'Urdu'? I predict true.");
console.log(language != 'Urdu');

// Testing with the lower case function
let username = 'AHaseeb';
console.log("Is username equal to 'ahaseeb' (case insensitive)? I predict true.");
console.log(username.toLowerCase() == 'ahaseeb');

// Num tests
let x = 5;
console.log("Is x greater than 3? I predict true.");
console.log(x > 3);

let y = 10;
console.log("Is y less than or equal to 10? I predict true.");
console.log(y <= 10);

let z = 7;
console.log("Is z not equal to 7? I predict false.");
console.log(z !== 7);

// Testing with "and" and "or" operators
let age = 25;
console.log("Is age between 20 and 30? I predict true.");
console.log(age > 20 && age < 30);

let man = true;
console.log("Is it man or old man? I predict true.");
console.log(man || age > 30);

// Test whether an item is in an array
let fruits = ['apple', 'banana', 'orange'];
console.log("Is 'apple' in the fruits array? I predict true.");
console.log(fruits.includes('apple'));

// Test whether an item is not in an array
let vegetables = ['carrot', 'broccoli', 'spinach'];
console.log("Is 'tomato' not in the vegetables array? I predict true.");
console.log(!vegetables.includes('tomato'));
