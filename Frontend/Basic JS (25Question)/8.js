// Q8. User Greeting - Ask for the user's name and time (24-hour format). Greet them Accordingly:

// 5 AM–12 PM: "Good Morning, [Name]!"

// 12 PM–5 PM: "Good Afternoon, [Name]!"

// 5 PM–9 PM: "Good Evening, [Name]!"

// 9 PM–5 AM: "Good Night, [Name]!"

// Answer 8
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