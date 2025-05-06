// Q17. Palindrome Checker - Ask the user for a word. Check if it reads the same forward and backward. Print "Palindrome" or "Not a Palindrome".
// Answer 17 
let input = prompt("Write a word").toLowerCase();
function wordchecker(input){
    let reverse = input.split('').reverse().join('');
    if (input === reverse ){
        return "Palindrome";
    } else{
        return "Not Palindrome";
    }
}
console.log( "This words is",wordchecker(input));