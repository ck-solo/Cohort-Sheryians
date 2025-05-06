// Q12. Simple Login System – Set a predefined username and password. Ask the user to enter their credentials using prompt(). If correct, print “Login Successful”; otherwise, print “Incorrect username or password.”
// Answer 12
const username = "admin".toLowerCase();
const password = 123;

let enteredusernames = prompt("Enter username ");
let enterpass = Number(prompt("Enter password "));

if (enteredusernames === username && enterpass === password) {
  alert("Login successful!");
} else {
  alert("Invalid credentials!");
}