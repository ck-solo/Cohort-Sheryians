// Q11. Grade Calculator – Ask the user for their marks (0-100).
// Assign grades based on the range:

// 90-100: A

// 80-89: B

// 70-79: C

// 60-69: D

// Below 60: F

// Answer 11
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