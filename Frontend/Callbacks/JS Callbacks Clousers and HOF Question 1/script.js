// Answer solving
// Q1.Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).
// setTimeout function bs ek baar chalega jtna delay diya rhega
// setInterval function baar baar chalega jitna delay diya rhega

// function timedelay(fn){
//     setTimeout(fn, 4000);
// }

// timedelay(function(){
//     console.log('Hello World');
// })

//Q2. Implement your own version of `.map()` as a higher-order function.
// let arr = [1, 2, 3, 4, 5];

// function vap(arr, fn) {
//   var result = [];

//   for (var i = 0; i < arr.length; i++) {
//     result.push(fn(arr[i]));
//   }

//   return result;
// }

// const output = vap(arr, function (item) {
//   return item * 2;
// });

// console.log(output);

//Q3. Write a function that uses closures to create a counter.

// function createCounter(){
//     let count = 0;
//     return function (){
//         count++;
//         console.log(count);
//     }
// }

// createCounter();
// createCounter();


// let fn = createCounter();
// fn();
// fn();
// fn();


//Q4.Implement a function that limits how many times another function can be called (Closure + HOF).

function limittime(fn , limit){ 
        let calledtimes = 0;

        return function (){
            if(calledtimes < limit){
                calledtimes++;
                fn()
            }else{
                console.log("called time limit")
            }
        }

    
}

let totallimit =  limittime(function(){
    console.log("Hello");
},3)

totallimit();
totallimit();
totallimit();
totallimit(); 