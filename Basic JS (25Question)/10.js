// Q10. Multiplication Table – Ask the user for a number and print its multiplication table up to 10.
// Answer 10 
let username = Number(prompt("Enter a number "));
function table(){
    for (let i = 0; i <= 10; i++) {
        console.log(`${username} x  ${i}  =  ${username * i}`);
    }
}
table();