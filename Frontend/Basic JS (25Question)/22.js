// Q22. Nested Condition Challenge – Ask the user for their age and salary. Print a message based on conditions:
// If age is below 18, print “Not eligible”
// If age is 18 or more but salary is less than ₹20,000, print “Low
// Salary”
// If salary is ₹50,000 or more, print “High Salary”
// . Otherwise, print “Medium Salary”
// Answer 22
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
