// Q23. Toggle Case – Ask the user for a word and toggle the case of every character. Example: HeLLo → hEllO.
// Answer 23
let text = prompt("Enter a text");
function toggleCase(text) {
  let toggleText = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char == char.toUpperCase()) {
      toggleText += char.toLowerCase();
    } else {
      toggleText += char.toUpperCase();
    }
  }
  return toggleText;
}

let result = toggleCase(text);
console.log(result);