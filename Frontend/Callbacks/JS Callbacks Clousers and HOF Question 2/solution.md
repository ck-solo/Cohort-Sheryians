// Q1. Create a function that takes a callback and executes it after every `n` seconds indefinitely.
create a function that take a function and time in its paramter and inside it runs a time interval function with that time 

function time(fn, time){
    setInterval(fn,time)
}

time(function(){
console.log("hello")
},2000)


// Q2. Implement a function that returns a function with a preset greeting (Closure).
create a greeting function thast returns a function. Call the greeting function by passing an argumernt hello and take argument in param and use the param in return function console log. save the greeting function in variable and pass the name as argument by calling the variable 

function greeting(gret){

    return function(name){
        console.log(`${gret} ${name}`)

    }
}

var greetfn = greeting("hello")
greetfn("raghav")