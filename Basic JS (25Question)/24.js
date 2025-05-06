// Q24. Find the Missing Number in a Sequence – Take a list of
// consecutive numbers (except one missing) and find the
// missing number. Example: 1, 2, 3, 5 → Missing number is 4.
// Answer 24
function findMissingNumber(arr) {
    // Find the minimum and maximum values in the array
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    
    // Calculate the expected sum of the complete sequence from min to max
    let expectedSum = ((max - min + 1) * (min + max)) / 2;
    // Calculate the actual sum of the given array
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }
    // The missing number is the difference between the expected sum and the actual sum
    return expectedSum - actualSum;
}
// Prompt the user for the sequence of numbers (e.g., "5,6,7,9")
let input = prompt("Enter a sequence of consecutive numbers separated by commas (e.g., '5,6,7,9'):");

// Convert the user input into an array of numbers
let numbers = input.split(',').map(Number);

// Find the missing number in the sequence
let missingNumber = findMissingNumber(numbers);

// Display the result
console.log("The missing number is:", missingNumber);