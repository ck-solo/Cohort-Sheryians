// Q4. Largest of Three Numbers - Take three numbers as input and print the largest number among them without using Math.max().
// Answer 4
 let num1 = Number(prompt("Enter first number"));
 let num2 = Number(prompt("Enter second number"));
 let num3 = Number(prompt("Enter third number"));

 let highest;

 if( num1 > num2 && num1 > num3 )
 {
 highest = num1;
 } else if( num2 > num3 && num2 > num1){
 highest = num2;
 }
 else{
 highest = num3;
 }
 console.log("Highest number is ",highest);

