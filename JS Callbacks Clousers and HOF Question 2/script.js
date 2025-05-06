// Q1. Create a function that takes a callback and executes it after every `n` seconds indefinitely.
// function time(fn,time){
//     setInterval (fn, time);
// }
// var ans = time(function(){
//     console.log("hello world")
// },2000)

// Q2. Implement a function that returns a function with a preset greeting (Closure).
// function greeting(greet){
//     return function(name){
//         console.log(`${greet} ${name}`)
//     }
// }
// var ans = greeting("Hello");
// ans("Lucy") 
// ans("raghav") 
// ans("nancy") 

// Q3. Implement a function that takes a callback and only executes it once (HOF + Closure).
function once(val,time){ 
    setTimeout(val, time);
}

var ans = once(function(){
    console.log("Hello")
},3000)