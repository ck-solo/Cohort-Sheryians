// Q5. Leap Year Checker - Ask the user for a year and determine if it's a leap year or not.
//   Answer 5
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