// Q20. Find First Non-Repeating Character – Ask the user for a word and find the first character that does not repeat. Example: hello → h (since e, l, and o repeat).
// Answer 20
function findFirstUniqueChar(word) {
    // Step 1: Create a Map to store character frequencies
    let charMap = new Map();
    // Step 2: Count the frequency of each character
    for (let char of word) {
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1);
        } else {
            charMap.set(char, 1);
        }
    }
    // Step 3: Find the first character with a frequency of 1
    for (let char of word) {
        if (charMap.get(char) === 1) {
            return char;
        }
    }
    // If no unique character is found, return this message
    return "No unique character found";
}

// Ask the user for a word
let userInput = prompt("Enter a word: ");
// Find the first non-repeating character
let result = findFirstUniqueChar(userInput);
// Display the result
console.log("The first non-repeating character is:", result);
