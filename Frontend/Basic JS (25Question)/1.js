// Q1. Age Category Message - Ask the user for their age. If they are under 18, print "You are a minor." If they are between 18 and 60, print "You are adult." If they are above 60, print "You are a senior citizen."
//  Answer 1
 let user = Number(prompt("Enter Your Age "));
 if (user < 18) {
 console.log("You are a minor");
 } else if (user >= 18 && user <= 60) {
 console.log("You are adult");
 } else {
 console.log("You are a senior citizen");
 }