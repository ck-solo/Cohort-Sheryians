// Q16. Sum of Digits - Take a number from the user and print the sum of its digits. (Example:123 1 + 2 + 3 = 6->)
// Answer 16
let input = Number(prompt("Write a Number"));
function addnumbers(input){
    let sum = 0;
    let numstr = input.toString();
    for(let i = 0 ; i<numstr.length; i++){
        sum += parseInt(numstr[i]);
    }
    return sum;
}
let sum = input;
console.log("This sum of the digit is ", addnumbers(sum));
