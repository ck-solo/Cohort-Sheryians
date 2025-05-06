// Q14. FizzBuzz (Multiple of Both) – Ask the user for a number. If it's a multiple of both 3 and 5, print “FizzBuzz”; if only 3, print “Fizz”; if only 5, print “Buzz”; otherwise, print the number itself.
// Answer 14
let usernumber = Number(prompt("Enter a number"));
let divisor = [3,5];
 if (usernumber % divisor == 0  ){
    console.log("FizzBuzz")
 } else if (usernumber % 3 == 0 ){
    console.log("Fizz")
 } else if (usernumber % 5 == 0){
    console.log("Buzz")
} else {
    console.log(usernumber)
}