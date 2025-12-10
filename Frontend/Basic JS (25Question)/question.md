Q1. Age Category Message - Ask the user for their age. If they are under 18, print "You are a minor." If they are between 18 and 60, print "You are adult." If they are above 60, print "You are a senior citizen."
 Answer 1
 let user = Number(prompt("Enter Your Age "));
 if (user < 18) {
 console.log("You are a minor");
 } else if (user >= 18 && user <= 60) {
 console.log("You are adult");
 } else {
 console.log("You are a senior citizen");
 }


Q2. Even or Odd Sum - Take two numbers from the user using prompt()/ If the sum of both numbers is even, print"Even Sum".
Otherwise, print"Odd Sum."

  Answer 2
 let num1 = Number(prompt("Enter First number"));
 let num2 = Number(prompt("Enter Second number"));
 let total = num1 + num2;
 if (total % 2 == 0){
 console.log ("The sum of the two numbers is Even", total);
 }

 else{
 console.log ("The sum of the two numbers is Odd ", total);
 }




Q3. Character Case Checker - Ask the user for a single character. Check if it's uppercase,lowercase or neither (not a letter).
Answer 3 
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



Q4. Largest of Three Numbers - Take three numbers as input and print the largest number among them without using Math.max().
Answer 4
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



Q5. Leap Year Checker - Ask the user for a year and determine if it's a leap year or not.
  Answer 5
 let yearInput = prompt("Enter a year:");
 let year = Number(yearInput);
 function checkLeapYear(year) {
 if (isNaN(year)) {
 return 'Invalid input. Please enter a valid year.';
 }

 if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
 return `${year} is a leap year.`;
 } else {
 return `${year} is not a leap year.`;
 }
 }

 let result = checkLeapYear(year);
 console.log(result);
 alert(result);

Q6. Simple Calculator - Ask the user for two numbers and operator (+,-,*,/). Perform the operation and display the result.
Answer6
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


Q7. Positive, Negative, or Zero – Take a number input and check if it is positive, negative, or zero.
Answer 7
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
 


Q8. User Greeting - Ask for the user's name and time (24-hour format). Greet them Accordingly:

5 AM–12 PM: "Good Morning, [Name]!"

12 PM–5 PM: "Good Afternoon, [Name]!"

5 PM–9 PM: "Good Evening, [Name]!"

9 PM–5 AM: "Good Night, [Name]!"

Answer 8
let username = prompt("Enter your name ")
let userhours = prompt("Enter hours: (0-23)");
let time  = prompt("Enter Am or PM").toLowerCase(); 

if ( userhours > 0 && userhours < 12 && time == "am" ){
    console.log("GoodMorning", username)
} else if ( userhours >= 12 &&  userhours < 17 &&  time == "pm" ){
    console.log("Good Afternoon", username)
} else if ( userhours >= 17 && userhours < 21 && time == "pm"){
    console.log("Good Evening", username)
} else{
    console.log("Good Night", username)
}



Q9. Traffic Light System – Ask the user for a traffic light color (red,
yellow, green). Print appropriate messages:

Red: "Stop!"

Yellow: "Get Ready!"

Green: "Go!"

Answer 9
let traffic = prompt("Which traffic light  you seeing").toLowerCase(); 

function Light(traffic ) {
  switch (traffic) {
    case "red":
      return  "Stop!";
    case "yellow":
      return  "Get Ready!";
    case "green":
      return "Go!";
    default:
      return "Invalid Input";
  }
}

let result = Light(traffic);
console.log(`result: ${result}`);
alert(`result: ${result}`);





Q10. Multiplication Table – Ask the user for a number and print its multiplication table up to 10.
Answer 10 
let username = Number(prompt("Enter a number "));
function table(){
    for (let i = 0; i <= 10; i++) {
        console.log(`${username} x  ${i}  =  ${username * i}`);
    }
}
table();


Q11. Grade Calculator – Ask the user for their marks (0-100).
Assign grades based on the range:

90-100: A

80-89: B

70-79: C

60-69: D

Below 60: F

Answer 11
let grades = Number(prompt("Enter Your Number"));

if (grades >= 90 && grades <= 100) {
  console.log("Your Grade is A");
} else if (grades >= 80 && grades <= 89) {
  console.log("Your Grade is B");
} else if (grades >= 70 && grades <= 79) {
  console.log("Your Grade is C");
} else if (grades >= 60 && grades <= 69) {
  console.log("Your Grade is D");
} else {
  console.log("Your Grade is F");
}



Q12. Simple Login System – Set a predefined username and password. Ask the user to enter their credentials using prompt(). If correct, print “Login Successful”; otherwise, print “Incorrect username or password.”

Answer 12
const username = "admin".toLowerCase();
const password = 123;

let enteredusernames = prompt("Enter username ");
let enterpass = Number(prompt("Enter password "));

if (enteredusernames === username && enterpass === password) {
  alert("Login successful!");
} else {
  alert("Invalid credentials!");
}


Q13 Swapping Without Third Variable – Take two numbers from the user and swap their values without using a third variable.

Answer 13
let firstnumber = Number(prompt("First number"));
let secondnumber = Number(prompt("Second number"));

function swapnumb(){
    [firstnumber, secondnumber] = [secondnumber, firstnumber]
    console.log("firstnumber", firstnumber);
    console.log("secondnumber", secondnumber);
}
swapnumb();

Q14. FizzBuzz (Multiple of Both) – Ask the user for a number. If it's a multiple of both 3 and 5, print “FizzBuzz”; if only 3, print “Fizz”; if only 5, print “Buzz”; otherwise, print the number itself.

Answer 14
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

Q15. Number Reversal - Take a three-digit number from the user and print its revese. (Example:123 -> 321).

Answer 15
let numb = Number(prompt("Enter a three-digit number"));
let reverse = numb.toString().split('').reverse().join('');
let reversedNumber = Number(reverse);
console.log(reversedNumber);



Q16. Sum of Digits - Take a number from the user and print the sum of its digits. (Example:123 1 + 2 + 3 = 6->)

Answer 16
let input = Number(prompt("Write a Number"));
function addnumbers(input){
    let sum = 0;
    let numstr = input.toString();
    for(let i = 0 ; i<numstr.length; i++){
        sum += parseInt(numstr[i]);
    }
    return sum;
}
let sum = input;
console.log("This sum of the digit is ", addnumbers(sum));

///
Q17. Palindrome Checker - Ask the user for a word. Check if it reads the same forward and backward. Print "Palindrome" or "Not a Palindrome".
Answer 17 
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


///
Q18. Reverse Without String Methods - Ask the user for a number and reverse it without using.split() and .reverse() or .join() methods.
Answer 18
let num = Number(prompt("Enter the first number:"));
function reverseNumber(number) {
    let reversed = 0;
    while (number > 0) {
        let digit = number % 10;
        reversed = reversed * 10 + digit;
        number = Math.floor(number / 10);
    }
    return reversed;
}
let reversedNum = reverseNumber(num);
console.log("Reversed number is : " + reversedNum);


Q19. Find Second Largest - Take three numbers as input and find the second largest number (without using sort() or Math.max()).

Answer 19
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


Q20. Find First Non-Repeating Character – Ask the user for a word and find the first character that does not repeat. Example: hello → h (since e, l, and o repeat).
Answer 20
function findFirstUniqueChar(word) {
    // Step 1: Create a Map to store character frequencies
    let charMap = new Map();

    // Step 2: Count the frequency of each character
    for (let char of word) {
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1);
        } else {
            charMap.set(char, 1);
        }
    }
    // Step 3: Find the first character with a frequency of 1
    for (let char of word) {
        if (charMap.get(char) === 1) {
            return char;
        }
    }
    // If no unique character is found, return this message
    return "No unique character found";
}

// Ask the user for a word
let userInput = prompt("Enter a word: ");
// Find the first non-repeating character
let result = findFirstUniqueChar(userInput);
// Display the result
console.log("The first non-repeating character is:", result);


Q21. Even Digit Counter – Take a number from the user and count how many even digits it has.
Ansewr 21
let num = Number(prompt("Enter the first number:"));
 
function countevenDigit(numbers){
    let count = 0;
    let numstr = numbers.toString();
    for(let i = 0; i < numstr.length; i++){
        let digit = parseInt(numstr[i]);
        if (digit % 2 === 0){
            count++;    
        }
    }
    return count;
}

let evendigitcount= countevenDigit(num)
console.log("The number of even digits is ", evendigitcount);
///
Q22. Nested Condition Challenge – Ask the user for their age and salary. Print a message based on conditions:

If age is below 18, print “Not eligible”

If age is 18 or more but salary is less than ₹20,000, print “Low
Salary”

If salary is ₹50,000 or more, print “High Salary”

. Otherwise, print “Medium Salary”

Answer 22
let userage = Number(prompt("Enter your age"));

if (userage < 18) {
  console.log("Not eligible");
} else {
  let usersalary = Number(prompt("Enter your Salary"));

  if (usersalary < 20000) {
    console.log("Low Salary");
  } else if (usersalary > 50000) {
    console.log("High Salary");
  } else {
    console.log("Medium Salary");
  }
}



Q23. Toggle Case – Ask the user for a word and toggle the case of every character. Example: HeLLo → hEllO.

Answer 23
let text = prompt("Enter a text");
function toggleCase(text) {
  let toggleText = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char == char.toUpperCase()) {
      toggleText += char.toLowerCase();
    } else {
      toggleText += char.toUpperCase();
    }
  }
  return toggleText;
}

let result = toggleCase(text);
console.log(result);

///
Q24. Find the Missing Number in a Sequence – Take a list of
consecutive numbers (except one missing) and find the
missing number. Example: 1, 2, 3, 5 → Missing number is 4.
Answer 24
function findMissingNumber(arr) {
    // Find the minimum and maximum values in the array
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    
    // Calculate the expected sum of the complete sequence from min to max
    let expectedSum = ((max - min + 1) * (min + max)) / 2;
    // Calculate the actual sum of the given array
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }
    // The missing number is the difference between the expected sum and the actual sum
    return expectedSum - actualSum;
}
// Prompt the user for the sequence of numbers (e.g., "5,6,7,9")
let input = prompt("Enter a sequence of consecutive numbers separated by commas (e.g., '5,6,7,9'):");

// Convert the user input into an array of numbers
let numbers = input.split(',').map(Number);

// Find the missing number in the sequence
let missingNumber = findMissingNumber(numbers);

// Display the result
console.log("The missing number is:", missingNumber);
 

Q25. Convert Number to Words – Take a single-digit number and
print it in words (Example: 1 → One, 2 → Two).
Answer 25
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