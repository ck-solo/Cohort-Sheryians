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
// function onetimeExecute(fn){
//     let executed = false
    
//     return function(){

//         if(!executed){
//             executed= true
//             fn() 
//         }else{
//             console.error("already executed")
//         }
//     }
// }

// var ansfn = onetimeExecute(function(){
//     console.log("hello world")
// })
 
// ansfn()
// ansfn()



//Q4. Implement a function that throttles another function (HOF + Closures).
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