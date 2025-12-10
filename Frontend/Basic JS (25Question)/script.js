// Q25. Convert Number to Words – Take a single-digit number and
// print it in words (Example: 1 → One, 2 → Two).
// Answer 25
let input = Number(prompt("Enter a single digit number"));

function numbertowords(number){
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]

    if (input >= 0 && input <= 9){
        return words[number];
    } else{
        return "Invalid input! Please enter a single digit number.";
    }
}

let word = numbertowords(input);
console.log("The number in words is " + word);