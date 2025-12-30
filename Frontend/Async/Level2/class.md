sync => callstack > main thread
async => web Api => callback queue > (empty callstack) => main thread

callback hell
function stepone(cb){
console.log("step one")
cb()
}

function steptwo(cb){
console.log("step two")
cb()
}

function stepthree(cb){
console.log("step three")
cb()
}

stepone(function(){
steptwo(function(){
stepthree(function(){
console.log("done")
})
})
})

// ****************\*\*\*****************
Promise
function stepone(){
return new Promise(function(res,rej)=>{
console.log("step one")
res()
})

}

function steptwo(cb){
return new Promise(function(res,rej)=>{
console.log("step one")
res()
})
}

function stepthree(cb){
return new Promise(function(res,rej)=>{
console.log("step one")
res()
})
}

stepone()
.then(steptwo)
.then(stepthree)
.then(function(){
 console.log("done")
})
