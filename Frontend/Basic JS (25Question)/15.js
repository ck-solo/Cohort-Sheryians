// Q15. Number Reversal - Take a three-digit number from the user and print its revese. (Example:123 -> 321).
// Answer 15
let numb = Number(prompt("Enter a three-digit number"));
let reverse = numb.toString().split('').reverse().join('');
let reversedNumber = Number(reverse);
console.log(reversedNumber);
