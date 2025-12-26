function Snacks(name){
    this.name = name
}

let s1 = new Snacks("Kurkure");

In the above function, we have created a function called Snacks. This function takes in a parameter called name. The function then creates a variable called this.name and assigns it the value of name.

ab isme agar this.name ke baad this.price then this.color banayenge to wo ek extra jagah lega jo storage badhayega to hum PROTOTPE ka use krenge snack.parameter.price ke use krenge snack.parameter.color jise use krne se ek extra space nhi lega aur storage ek baar hi use krege 

function Snacks(name){
    this.name = name
}

Snacks.prototype.price = 100;
Snacks.prototype.color = "red";

let s1 = new Snacks("Kurkure");
let s2 = new Snacks("Biscuits");
let s3 = new Snacks("Chocolate");

In the above function, we have created a function called Snacks. This function takes in a parameter called name. The function then creates a variable called this.name and assigns it the value of name.

ab isme agar this.name ke baad this.price then this.color banayenge to wo ek extra jagah lega jo storage badhayega to hum PROTOTPE ka use krenge snack.parameter.price ke use krenge snack.parameter.color jise use krne se ek extra space nhi lega aur storage ek baar hi use krege 

function Snacks(name){
    this.name = name
}

Snacks.prototype.price = 100;
Snacks.prototype.color = "red";

let s1 = new Snacks("Kurkure");
let s2 = new Snacks("Biscuits");
let s3 = new Snacks("Chocolate");