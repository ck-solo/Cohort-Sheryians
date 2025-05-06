// Q18. Reverse Without String Methods - Ask the user for a number and reverse it without using.split() and .reverse() or .join() methods.
// Answer 18
let num = Number(prompt("Enter the first number:"));
function reverseNumber(number) {
    let reversed = 0;
    while (number > 0) {
        let digit = number % 10;
        reversed = reversed * 10 + digit;
        number = Math.floor(number / 10);
    }
    return reversed;
}
let reversedNum = reverseNumber(num);
console.log("Reversed number is : " + reversedNum);