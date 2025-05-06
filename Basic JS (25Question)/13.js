// Q13 Swapping Without Third Variable – Take two numbers from the user and swap their values without using a third variable.
// Answer 13
let firstnumber = Number(prompt("First number"));
let secondnumber = Number(prompt("Second number"));

function swapnumb(){
    [firstnumber, secondnumber] = [secondnumber, firstnumber]
    console.log("firstnumber", firstnumber);
    console.log("secondnumber", secondnumber);
}
swapnumb();