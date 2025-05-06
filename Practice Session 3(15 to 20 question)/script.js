// Question 16 
// Remove duplicate values from an array. let arr = [1, 2, 3, 2, 4, 3, 5];
// Answer
// let arr = [1,2,3,2,4,3,5];
// var ans = [...new Set(arr)];// unique array


// Question 17
// Find the second largest number in an array. function secondLargest(arr) {
// let arr2 = [1,2,3,4,2,4,26,43,234,543,1124,583,124,553,]
// arr2.sort(function(a,b){
//     return b - a  // sort array in descending order
// })
// console.log(arr2[1]) // second largest number in array
 

// Question 18 
// Sort an array in descending order. 
// let numbers = [5, 2, 9, 1, 5, 6];
// numbers.sort(function(a,b){
//     return b -a
// })
// console.log(numbers) // array sorted in descending order
 
// Question 19
// Reverse an array without using .reverse()
// let num = [1,2,3,4,5,6]
// let num2 = [];
 
// for (let i = num.length-1; i>=0; i--){
//     num2.push(num[i]);
// }


// Question 20
// Find the most frequent element in an array.
// let arr = [1,2,3,3,4,4,1,5,6,7,4,4,4,3,3,2,2,9];
// let arr2 = {};
// arr.forEach(function(val){
//     arr2[val] === undefined ? (arr2[val] = 1) : arr2[val]++;
// })

 
let arr = [1,2,3,4,5];
let reverse = [];
for(let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
}
console.log(reverse);