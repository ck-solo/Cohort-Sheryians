oops kya hote hai
objects ko create krna jo sirf data hold na kre unki functionality ko bhi hold kre aur use object ko create krna ka blueprint model


use kese kre
ek function banao aur use call krte hue new laga do. New lagane ke baad us funcrion ke andar ek imaginary container ban jauyega jisme object ko create krega aur usme jo bhi variable this.name ke use krega wo us object ke andar add hota jayega 

function Biscutit(name, shape, color, flavour){
    this.name = name,
    this.shape = shape,
    this.color = color,
    this.flavour = flavour
}


let biscuit = new Biscutit("Parlez-Vous", "round", "red", "chocolate")
let biscuit2 = new Biscutit("Mario", "square", "pink", "vanila")

class oops
har class banante hi pehla chiz jo banate hai use constructor kehte hai 
class snacks{
    constructor(name, shape, color, flavour){
        this.name = name,
        this.shape = shape,
        this.color = color,
        this.flavour = flavour
    }

}

snacks() isme function isliye run kr rhe hai kyunki after snack brace() cosntructor ki wajah se use krna hai 
var t1 = new snacks("Parlez-Vous", "round", "red", "chocolate")
var t2 = new snacks("Mario", "square", "pink", "vanila")
