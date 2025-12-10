// Q21. Even Digit Counter – Take a number from the user and count how many even digits it has.
// Ansewr 21
let num = Number(prompt("Enter the first number:"));
 
function countevenDigit(numbers){
    let count = 0;
    let numstr = numbers.toString();
    for(let i = 0; i < numstr.length; i++){
        let digit = parseInt(numstr[i]);
        if (digit % 2 === 0){
            count++;    
        }
    }
    return count;
}

let evendigitcount= countevenDigit(num)
console.log("The number of even digits is ", evendigitcount);