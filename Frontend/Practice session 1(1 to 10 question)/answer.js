// CONSOLE & BASIC OPERATORS

//QUESTION 1.
// Log "Hello World" to the console in 3 different ways:
// ANSWER
// console.log("Hello World")
// console.warn("Hello World")
// console.error("Hello World")

// QUESTION 2.
// PERFORM 35 * 2 - (10/2) + 7 and log the result.
//  console.log(35 * 2 - (10/2) + 7) ;// output 72

// QUESTION 3.
//  log the data type of "123", 123 , true and null using typeof

// console.log(typeof "123") ;// string
// console.log(typeof 123); // number
// console.log(typeof true); // boolean
// console.log(typeof null); // object

// QUESTION 4.
// write a program that swap the value of two variables
// Method 1
// let a = 10;
// let b = 20;
// [a,b] = [b,a]
// console.log(a,b)

// Method 2
// let a = 4;
// let b = 8;
// let c;
// c = a;
// b = c;
// c = a;

// Method 3
// var a = 12;
// var b = 9;

// a = a + b;  //a = 21
// b = a - b ; // b = 12;
// a = a - b ; // a = 9
// console.log(a, b); // output: 9, 12


// Question 5
// Use console.group() to organize logs into a group

// console.groupCollapsed ("Kya Karna hai");
//  console.log("Subh jaldi uth ke padhai");
//  console.log(" Din bhar padhai karna");
//  console.log("raat me jaldi sona");
// console.groupEnd(); 
 

// Question 6.
// Declare a const object, modify its properties, and log the updated object.

// const person = {
//     nme: "light",
//     age: 23,
//     city: "delhi"
// }
// Object.freeze(person) // Now you don't do any updataion and changes in the const objet;
// person.age = 24;


// Questin 7 .
//  Convert "50" (string) into a number using 3 different methods.
// let str = Number(12)
// let num = parseInt(12)
// let ans = +(21)

// console.log(str, num, ans); // output 12, 12, 21 
// console.log(typeof str)
// console.log(typeof ans)
// console.log(typeof num)


// Question 8.
// Check if "JavaScript" contains "Script" without using .includes()
//  let str = "JavaScript";
//  console.log(str.search("Script")!== -1)
//  console.log(str.indexOf("Script") !== -1)

// Question 9.
// Create an array of 5 numbers and log the sum using .reduce().
//  let arr = [1,2,3,4,5];
//  var ans = arr.reduce(function (acc,key){
//     return acc + key
//  },0)
//  console.log(ans)

// Question 10.
// Explain the difference between undefined, null, and NaN with examples.
//  let a;
//  console.log(a)  // undefined

//  let b = null;
//  console.log(b)  // null

//  let c = "Apple"
//  console.log(c - 9)  // Nan