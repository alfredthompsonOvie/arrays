"use strict";

//1. Arrays
/* An array is an ordered collection of values. Each value is called an element, and each element has a numeric position in the array, known as its index. 
NOTE=> array indexing starts from 0.

An array element may be of any type, and different elements of the same array may be of different types.

*/
//1.2 creating  an array
/* 
the following are the ways in which we can create an array
- Array literals
- The ... spread operator on an iterable object
- The Array() constructor
- The Array.of() and Array.from() factory methods
*/

//1.2.1 Array literal
// By far the simplest way to create an array is with an array literal

const numbers = [1, 2, 3, 4, 5];

// an array of 3 elements of various types
const misc = [1.1, true, "liann"];

// Array literals can contain object literals or other array literals
let b = [
	[1, { x: 1, y: 2 }],
	[2, { x: 3, y: 4 }],
];

// const digits = [1, 2, 3, 4, 5];

//1.2.2 The ... spread operator
/*
you can use the “spread operator,” ..., to include the elements of one array within an array literal:
*/
let original = [1, 2, 3, 4, 5];
let copy = [...original];

//1.2.3 The Array() Constructor
// Another way to create an array is with the Array() constructor.

let a = new Array();

let c = new Array(10); //creates an empty array with a lenght of 10, each element's position in the array is undefined

let d = new Array(5, 6, 7, 8, 9, 0);

// 2.1 Reading and Writing Array Elements

let e = ["hello"]; // Start with a one-element array
let value = e[0]; //Read element('hello') at index 0 and assign it to value
e[1] = "world"; //writes element('world') to index 1

e.length; // the length property specifies the number of elements in the array

// 2.2 Adding and Deleting Array Elements
let f = []; //start with an empty array
f[0] = "zero"; //adds an element to it
f[1] = "one"; //adds another element to it

// You can also use the push() method to add one or more values to the end of an array:

f.push("three");
f.push("four", "five", "six");

//You can delete array elements with the delete operator,

delete f[2];

//Array Methods
// forEach()
/*The forEach() method iterates through an array, invoking a
function you specify for each element. you pass
the function as the first argument to forEach(). the function takes three arguments: the value/element of the array
element, the index of the array element, and the array itself.*/

// lets try to sum up all the elements of this array using the forEach() method
let data = [1, 2, 3, 4, 5];
let sum = 0;
data.forEach((value) => (sum += value));
// console.log(sum);

//now lets increment each array element
data.forEach((value, index, arr) => (arr[index] = value + 1));
// console.log(data);

// map()
/**
 The map() method passes each element of the array on which it is
invoked to the function you specify and returns an array containing the
values returned by your function.
 */
let g = [1, 2, 3];
let h = g.map((x) => x * x);
// console.log(h);

// FILTER()
/**
The filter() method returns an array containing a subset of the
elements of the array on which it is invoked. The function you pass to
it should be predicate: a function that returns true or false.
*/
let i = [5, 4, 3, 2, 1];
let j = i.filter((x) => x < 3);
// console.log(j);

//REDUCE()
/**
The reduce() methods combine the elements of an array, using the function you specify, to produce a single value.
 */
let k = [5, 4, 3, 2, 1];
let summation = k.reduce((x, y) => x + y, 0);
const product = k.reduce((x, y) => x * y);
const highestNum = k.reduce((x, y) => (x > y ? x : y));
const lowestNum = k.reduce((x, y) => (x < y ? x : y));

// console.log(summation);
// console.log(product);
// console.log(highestNum);
// console.log(lowestNum);

// Adding arrays with concat()
// for some weird reason this didnt work
let l = [1, 2, 3];

l.concat(4, 5);
l.concat("x");

// console.log(l);

// push() and pop()
/*
The push() method appends one or more new elements to the end of an array and returns the new length of the array. The pop() method does the reverse: it deletes the last element of an array,
*/
l.push(6); //adds 6 to the end
l.pop(); //removes the last element
// console.log(l);

/**
 The unshift() and shift() methods behave much like push()
and pop(), except that they insert and remove elements from the
beginning of an array rather than from the end. 
- unshift() adds an element or elements to the beginning of the array,
- shift() removes and returns the first element of
the array,
 */
l.shift();
// console.log(l);

l.unshift(1);
// console.log(l);

/*
SLICE()
The slice() method returns a slice, or subarray, of the specified
array. Its two arguments specify the start and end of the slice to be
returned.
*/

let splicedArray = l.slice(2); //starts from index 2 to the end of the array
// console.log(splicedArray);

let splicedMoreArray = l.slice(1, 3); //starts from index 1 and end at index 3 but the element at index 3 is not included

// console.log(splicedMoreArray);

/*
SPLICE()
splice() is a general-purpose method for inserting or removing elements from an array. splice modifies the orginal array

The first argument to splice() specifies the array position at which the insertion and/or deletion is to begin. The second argument specifies the number of elements that should be deleted from (spliced out of) the array. (Note that this is another difference between these two methods. The second argument
to slice() is an end position. The second argument to splice() is
a length.) If this second argument is omitted, all array elements from
the start element to the end of the array are removed.
*/

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// n.splice(4); //start deleting from index 4
// n.splice(1,2); //start at index 1 and delete the following two elements
// n.splice(2, 0, "a", "b"); // start at index 2 delete 0 element insert "a", then insert "b"
console.log(n);






















// const digits = numbers;
// number[0] = 9;
// delete number[0];
// console.log(numbers);

// const number = [];
// number[0] = 'crazy';
// number[5] = 'mad';
// // add to an array from the back
// number.push('thompson', 'liann', 'ngozi');
// // add to an array from the front
// number.unshift('tommy');
// // remove el of arr
// let removeLastItem = number.pop();
// let removeFirstItem = number.shift();
// number.shift();
// // console.log(number);
// console.log(removeLastItem);
// console.log(removeFirstItem);

// const words = ['tommy', 'says', 'hello'];

// property
// length 1 2 3 4 5
// array 0 1 2 3 4
// const lastWord = words[2];
// const lastWord = words[words.length -1];
// console.log(`is number the same as numbers: ${number == numbers
// }`);
// console.log(`is a the same as b: ${a == b
// }`);
// console.log(`lenght of numbers is ${numbers.length}`);

// console.log(`last index of numbers is ${numbers.length - 1}`);
// console.log(`last element of numbers is ${numbers[4] }`);
// console.log(`computed last element of numbers is ${numbers[numbers.length - 1] }`);

// const lastNumber = numbers.length - 1;
// populating an array
// index and method
// console.log();

// array methods

// forEach();
// const lists = [1, 2, 3, 4, 5]; //0 1 2 3 4
// const lists = [6, 7, 8, 9, 10]; //0 1 2 3 4
// lists[i]
// lists[0]
// let sum = 0;

// for (let i = 0; i < 5; i++) {
//  sum +=lists[i]
// }
// i=0 i = 1
// lists[0] // 1 // sum = 0 + 1= 1
//
// const lists = [3, 5, 2, 1, 4];
// lists[2]
// const lists = [3, 5, 9, 1, 8, [12, 25, [100], {name: 'tommy'}]];
// console.log(lists[5][2][0]);

// const newLists = [...lists];
// const newLists = Array.from(lists);
// const newLists = ['liann',...lists, lists.slice(2, 4)];

// lists[0] = [ 6, 7,8];
// console.log(newLists);
// const sum = lists.reduce((x, y) => x + y);
// const product = lists.reduce((x, y) => x * y);
// const highestNum = lists.reduce((x, y) => x > y ? x : y);
// const lowestNum = lists.reduce((x, y) => x < y ? x : y);

// const

// console.log(sum);
// console.log(product);
// console.log(highestNum);
// lists.forEach(el => {el % 2 == 0 ? el =1 : el});
// lists.forEach(el => el * 2);
// const lists2 = lists.map(el => el * 2);
// const lists2 = lists.filter(el => el > 2);
// console.log(lists2);
// console.log(lists);
// () => { return x + x };

// () => x + x;
// x => x + x;
// (x, y) => x + y;

// function sayHello(name) {
//  return `hi ${name}`;
//  // return "hi " + name;
// }

// sayHello('tommy');
// map();
// filter();

// reduce();

// slice();
// splice();
