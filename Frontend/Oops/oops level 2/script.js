function Snacks(name){
    this.name = name
}

Snacks.prototype.price = 100;
Snacks.prototype.color = "red";

let s1 = new Snacks("Kurkure");
let s2 = new Snacks("Biscuits");
let s3 = new Snacks("Chocolate");