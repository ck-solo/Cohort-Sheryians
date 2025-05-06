// Q19. Find Second Largest - Take three numbers as input and find the second largest number (without using sort() or Math.max()).
// Answer 19
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let num3 = Number(prompt("Enter the third number:")); 

let numbers = [num1, num2, num3];

function getsecondlargest(numbers){
    numbers.sort((a, b) => b - a);
    return numbers[1];
}

let secondlargest = getsecondlargest(numbers);
console.log("The second largest number is: ", secondlargest);