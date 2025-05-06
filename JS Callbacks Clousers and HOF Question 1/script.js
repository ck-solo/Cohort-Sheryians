// // Hof -> ek aisa function jo accept kre doosra function in parameter ya fir return kare ek aur funciton jese
// Case 1 without return
// function abcd(val){
// val()
// }
// abcd(function(){})

//  Case 2 using return

// function abcd(val) {
//  return function(){}
// }
// abcd(function () {});

// Callback function -> ek aisa function jo kisi dusre function me pass krte hai future me chalne ke liye isme second() ek callback function hai
// function abcd(val){
// }
// var ans = abcd(function second() {
//     console.log('Callback function called');
// });

// Closures function -> ek aisa function jo return kre dusra function and jo fnc return hua hai wo uske parent fnc ka koi varibale ho
// function abcd(){
//     var x = 10;
//     return function() {
//         console.log(x);
//     }
// }
// var ans = abcd();
// ans()

// Answer solving
// Q1.Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).
// setTimeout function bs ek baar chalega jtna delay diya rhega
// setInterval function baar baar chalega jitna delay diya rhega

// function timedelay(fn){
//     setTimeout(fn,3000);
// }

// timedelay(function(){
//     console.log('Hello World');
// })

//Q2. Implement your own version of `.map()` as a higher-order function.
// let arr = [2,3,4,5,6]
// function vap(arr,fn){
//     var newarr = []
//     for( let i = 0; i <arr.length; i++)
//         newarr.push(fn(arr[i]))
//     return newarr

// }
// var ans = vap(arr, function(arr){
//     return arr * 5
// })

//Q3. Write a function that uses closures to create a counter.

// function counter(){
//     var count = 0;
//     return function(){
//         count++;
//         console.log(count)
//     }
// }
// var ans = counter()
// ans()
// ans()

//Q4.Implement a function that limits how many times another function can be called (Closure + HOF).
 

function limittime(fn,limit){
    var count = 0;
    return function(){
        if(count < limit){
            count++;
            fn()
        }
        else{
            console.error('Function limit reached')
        }
    }
}

var ans = limittime(function(){
    console.log('Hello World')
},3)

ans()
ans()
ans()
ans()
