// callback hell
// function stepone(cb){
//     console.log("step one")
//     cb()
// }

// function steptwo(cb){
//     console.log("step two")
//     cb()
// }

// function stepthree(cb){
//     console.log("step three")
//     cb()
// }

// stepone(function(){
//     steptwo(function(){
//         stepthree(function(){
//             console.log("done")
//         })
//     })
// })



// ***********************************

// Promise
function stepone(){
return new Promise(function(res,rej){
console.log("step one")
res()
})

}

function steptwo(cb){
return new Promise(function(res,rej){
console.log("step two")
res()
})
}

function stepthree(cb){
return new Promise(function(res,rej){
console.log("step three")
res()
})
}

stepone()
.then(steptwo)
.then(stepthree)
.then(function(){
 console.log("done")
})

// function getsomedata(usrname,cb){
//     setTimeout(function(){
//         console.log("sending the request to instagram...");
//     },1000)
//     setTimeout(function(){
//         console.log("fetching data...");
//     },3000)
//     setTimeout(function(){
//         cb()
//     },5000)
// }
// getsomedata("Rohan",function(){
//     console.log("Data saved in server.")
// })


// const pr = new Promise(function(res,rej){
//      console.log("Server pr jaao")
//      console.log("data laao")
//      console.log("Data...")
//      res()
// })

// pr.then(function(){
//     console.log("Resolved");
// }).catch(function(){
//     console.log("Reject");
// });