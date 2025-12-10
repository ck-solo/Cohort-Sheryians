// Q7. Positive, Negative, or Zero – Take a number input and check if it is positive, negative, or zero.
// Answer 7
let character = Number(prompt("Enter character"));
if (character === 0){
    console.log("This is an Zero number")
} else if(character < 0){
    console.log("This is a negative number")
} else if (character > 0 && character < 99999999){
    console.log("This is a positive number")
} else {
    console.log("This is an alphabetic word")
}
 