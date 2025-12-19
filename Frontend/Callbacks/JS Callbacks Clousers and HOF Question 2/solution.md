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


// Q3. Implement a function that takes a callback and only executes it once (HOF + Closure).
create a onetimeExecute function thast returns a function. the function first run an if and else statement in which if check the executed value of its parent function is executed or not if yes then it jump to else and not then it execute the function and set the executed value to true and return the function and while call the function i store the data in ansfn variable in which a argument is pass to the function that pass the message .



function onetimeExecute(fn){
    let executed = false
    
    return function(){

        if(!executed){
            executed= true
            fn() 
        }else{
            console.error("already executed")
        }
    }
}

var ansfn = onetimeExecute(function(){
    console.log("hello world")
})
 
ansfn()
ansfn()


//Q4. Implement a function that throttles another function (HOF + Closures).

crearte a throttle function that returns a callback function in which it store the current time in a varible and then check the current time - last call time is greater than the delay time if yes then it call the function and set the last call time to current time and return the function if not then it show error. moreover i store the throttle function in a variable and call the function by passing the message and delay time. 
function throttle(fn,delay){
    let lastCall = 0;
    return function(){
        let now = Date.now()
        if(now  - lastCall >= delay){
            lastCall = now;
            fn()
        }else{
            console.error("called too soon")
        }
    }
}

let callThrottle = throttle(function(){
    console.log("hello world")
},2000)

callThrottle() 