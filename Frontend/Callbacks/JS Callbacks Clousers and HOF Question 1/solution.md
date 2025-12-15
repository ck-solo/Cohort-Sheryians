// Q1.Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).

function timedelay(fn){
setTimeout(fn, 3000); // we don't use fn() here because we don't want to call the function immediately

}
timedelay(function(){
console.log('Hello World');
})

//Q2. Implement your own version of `.map()` as a higher-order function.

ek function banaya vap naam ka usme ek array aur ek function ko param me call kiya hai fir uske andar ek blank array banaya hai jisme ek loop chalaya hai jo array ke har item pr uske puri length se ek kam tak chal rha hai aur jo value aai hai use push kr diya hai us blank array me aur fir return kr diya hai us blank array ko aur functin ko call krte hue ek array paas kiya hai jiske baad ek function call kiya hai jiske andar return kiya hai multiply 2 and then use ek variable me save kr liya hai aur use console.log kr diya hai

let arr = [1, 2, 3, 4, 5];
function vap(arr, fn) {
var result = [];

for (var i = 0; i < arr.length; i++) {
result.push(fn(arr[i]));
}

return result;
}

const output = vap(arr, function (item) {
return item \* 2;
});

console.log(output);


//Q3. Write a function that uses closures to create a counter.
ek count function banana hai jisme return krna hai ek aur function aur closures parent function ka ek variable use krta hai to ek variable banana hai jiski value 0 hogi aur return function me us varible ki value me 1 add kr dena hai then usko console.log kr dena hai aur count functino ko ek variable me store krke variable ko call krna se counter ban jayega

 function createCounter(){
//     let count = 0;
//     return function (){
//         count++;
//         console.log(count);
//     }
// }

// createCounter();
// createCounter();  iski wajah se sirf 1 hi repeat hoga baar baar aur use varible me store krkne se value 1 2 3 krke show hogi kyunki return ke baad function ko call krna se counter ban ja rha hai


// let fn = createCounter();
// fn();
// fn();
// fn();



//Q4.Implement a function that limits how many times another function can be called (Closure + HOF).
ek closure function banana hai jisme ek function return krna hai return function me ek parent ki varible ki value ko paas krna hai aur check krna hai ki 3 se kam ho aur use add krte rhna hai fir use console.log kr dena hai aur fir closure function ko ek varible me store krke us varible ko call krna hai naye varible ke andar jo closure function ko call kiya hai usme ek argument paas krni hai jisme ek function hai jiske andar ek console.log kiya hai value aur uske baad kitni baar krna hai wo value likhni hai jese timeinteral krte hai 

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