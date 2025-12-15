# 📦 JavaScript Objects – Complete Basics

JavaScript objects are one of the most important concepts in JS. Almost everything in JavaScript is an object. Objects allow us to store **key–value pairs** and represent real-world entities in code.

---

## 🔹 What is an Object?

An **object** is a collection of related data and functionality stored as **properties** (variables) and **methods** (functions).

```js
const user = {
  name: "Alex",
  age: 20,
  isStudent: true
};
```

Here:

* `name`, `age`, `isStudent` → **properties**
* `user` → **object name**

---

## 🔹 Creating Objects

### 1️⃣ Object Literal (Most Common)

```js
const car = {
  brand: "BMW",
  model: "X5",
  year: 2023
};
```

### 2️⃣ Using `new Object()`

```js
const person = new Object();
person.name = "John";
person.age = 25;
```

### 3️⃣ Using Constructor Function

```js
function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("Sam", 22);
```

---

## 🔹 Accessing Object Properties

### Dot Notation

```js
console.log(user.name);
```

### Bracket Notation

```js
console.log(user["age"]);
```

👉 Bracket notation is useful when:

* Property name has spaces
* Property name is dynamic

```js
const key = "name";
console.log(user[key]);
```

---

## 🔹 Adding, Updating & Deleting Properties

### Add

```js
user.city = "Delhi";
```

### Update

```js
user.age = 21;
```

### Delete

```js
delete user.isStudent;
```

---

## 🔹 Object Methods

Functions inside objects are called **methods**.

```js
const user = {
  name: "Alex",
  greet: function () {
    console.log("Hello!" + this.name);
  }
};

user.greet();
```

### `this` Keyword

* `this` refers to the **current object**

---

## 🔹 Nested Objects

Objects can contain other objects.

```js
const student = {
  name: "Rahul",
  marks: {
    math: 90,
    english: 85
  }
};

console.log(student.marks.math);
```

---

## 🔹 Object with Arrays

```js
const user = {
  name: "Aman",
  skills: ["HTML", "CSS", "JavaScript"]
};

console.log(user.skills[1]);
```

---

## 🔹 Checking Property Existence

### Using `in`

```js
console.log("name" in user); // true
```

### Using `hasOwnProperty()`

```js
user.hasOwnProperty("age");
```

---

## 🔹 Looping Through Objects

### `for...in` Loop

```js
for (let key in user) {
  console.log(key, user[key]);
}
```

---

## 🔹 Object Keys, Values & Entries

```js
Object.keys(user);   // returns array of keys
Object.values(user); // returns array of values
Object.entries(user); // returns key-value pairs
```

---

## 🔹 Object Destructuring

```js
const user = {
  name: "Alex",
  age: 20
};

const { name, age } = user;
console.log(name, age);
```

---

## 🔹 Spread Operator with Objects

```js
const user = { name: "Alex", age: 20 };
const details = { ...user, city: "Mumbai" };
```

---

## 🔹 Object Freeze & Seal

### `Object.freeze()`

* Cannot add, update or delete properties

```js
Object.freeze(user);
```

### `Object.seal()`

* Can update existing properties
* Cannot add or delete

```js
Object.seal(user);
```

---

## 🔹 Comparing Objects

❌ Objects are compared by reference, not value

```js
const a = { x: 1 };
const b = { x: 1 };

console.log(a === b); // false
```

---

## 🔹 Common Object Use-Cases

* Store user data
* API responses
* Configuration settings
* Group related data

---

## 🔹 Summary

* Objects store data in key-value format
* Access using dot or bracket notation
* Methods are functions inside objects
* `this` refers to the current object
* Objects can be nested and combined with arrays

---
 
