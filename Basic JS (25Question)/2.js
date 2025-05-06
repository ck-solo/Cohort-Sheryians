// Q2. Even or Odd Sum - Take two numbers from the user using prompt()/ If the sum of both numbers is even, print"Even Sum".
// Otherwise, print"Odd Sum."

//   Answer 2
 let num1 = Number(prompt("Enter First number"));
 let num2 = Number(prompt("Enter Second number"));
 let total = num1 + num2;
 if (total % 2 == 0){
 console.log ("The sum of the two numbers is Even", total);
 }

 else{
 console.log ("The sum of the two numbers is Odd ", total);
 }