function Snacks(name){
    this.name = name
}

Snacks.prototype.price = 100;
Snacks.prototype.color = "red";

let s1 = new Snacks("Kurkure");
let s2 = new Snacks("Biscuits");
let s3 = new Snacks("Chocolate");


function Employee(name, age, id, salary){
    this.name = name;
    this.age = age;
    this.id = id;
    this.salary = salary;
}

Employee.prototype.display = function(){
    console.log(`Name: ${this.name}, Age: ${this.age}, ID: ${this.id}, Salary: ${this.salary}`);
}

var emp1 = new Employee("John", 30, 123456, 50000);
emp1.display();