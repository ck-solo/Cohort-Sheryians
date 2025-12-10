// Q3. Character Case Checker - Ask the user for a single character. Check if it's uppercase,lowercase or neither (not a letter).
// Answer 3 
let character = prompt("Enter character");
if (character.length === 1 && !isNaN(character)) {
    console.log("Invalid Input");
} else if (character >= "a" && character <= "z") {
    console.log(character + " is a lowercase letter.");
} else if (character >= "A" && character <= "Z") {
    console.log(character + " is an uppercase letter.");
} else if (character >= 0 && character <= 99){
    console.log(character + " is a digit.");
} 
else {
    console.log(character + " is not a letter");
}