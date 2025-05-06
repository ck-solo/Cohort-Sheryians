// Q6. Simple Calculator - Ask the user for two numbers and operator (+,-,*,/). Perform the operation and display the result.
// Answer6
let num1 = Number(prompt("Enter First Number"));
let num2 = Number(prompt("Enter Second Number"));
let operator = prompt("Choose operator (+, - , * , /)");

function calculation(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operation";
  }
}

let result = calculation(num1, num2, operator);
console.log(`result: ${result}`);
