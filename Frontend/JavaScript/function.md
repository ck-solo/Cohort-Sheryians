What is a function?
Function is a block of code that performs a specific task.

Why fn is used?
whenever we need to perform a specific task, but not all the time but for reuse, we can use fn.

how t call a function?
abcd()


What is parameters?
Parameters are the inputs that are passed to the function.
function Greeting(name){
    console.log("Hello " + name); // name is the parameter
}
Greeting("Sheryan");


What is Arguments?
Arguments is the input that is passed to the function.
function Greeting(name){
    console.log("Hello " + name);
}
Greeting("World"); //World is the argument



ways of function declaration in javascript
1.function abcd(){
     // statement function
}

2. var abcd = function(){
     // expression function
}

3. function (){
     // anonymous function
}

4. ()=>{
     // fat arrow function
}

5. var good = a =>{
     // fat arrow function with one  parameters

}
good(10)

6. function age ()=>{
    return 12;
}

var raviage = age()
value of raviage is 12


what is rest parameter?
rest parameter is the parameter that can be used to pass multiple parameters to the function.
function Greeting(...name){
    console.log("Hello " + name.join(" "));
}
Greeting("Sheryan","Ravi","Vijay");


what is default parameter?
default parameter is the parameter that can be used to pass a default value to the function.
function Greeting(name="Sheryan"){
    console.log("Hello " + name);
}
Greeting(); //Hello Sheryan


what is hoisting?
hoisting is the process of moving the declaration of a variable to the top of its scope.
console.log(a);
var a = 10;

what is iife?
iife is an immediately invoked function expression.
(function(){
    console.log("hello");
})();   //hello

what is higher order function?
higher order function is a function that takes another function as an psrameter.


what is cb fnc?
cb fnc is a function that takes a callback as a arguments.
function abcd(){
}.

abcd(function(){
    console.log("hello");
})

what is first class function?
first class function is a function that can be used as a value.
var a = function abcd(){
console.log("hello");
}
a = hello;


what is pure function?
pure function is a function that has no side effects.

function abcd(){
    return a+b;
}
console.log(abcd(10,20)); //30


what is impure function?
impure function is a function that has side effects.

var a = 10;
function abcd(){
    a = a+1;
    return a;
}
console.log(abcd()); //11 


what is global scope?
global scope is the scope that is available to all the functions.we can access the global scope from any where in the code.
var a = 000


what is local scope?
local scope is the scope that is available to the function only.
function abcd(){
    var a = 10;
    console.log(a); //10
}
abcd();


what is closure?
closure is a function that has access to the outer function's variables.

function abcd(){
    var a = 10;
   return  function add(){
        return a+10;
    }
    return add;
}
var add = abcd();
console.log(add()); //20



