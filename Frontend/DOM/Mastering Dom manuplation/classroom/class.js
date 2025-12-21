// - Selecting of Element ✅
var heading = document.querySelector("h1")
var btn = document.querySelector("button")

// - Changing HTML✅
heading.textContent  = "This is changing heading"
btn.textContent = "Click me"




// - Changing CSS✅
heading.style.color = "red" 
btn.style.padding = "10px 20px" 




// - EventListener✅

btn.addEventListener("click", function(){
   heading.textContent = "Hello DOM"
})
