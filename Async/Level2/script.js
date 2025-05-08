function getsomedata(usrname,cb){
    setTimeout(function(){
        console.log("sending the request to instagram...");
    },1000)
    setTimeout(function(){
        console.log("fetching data...");
    },3000)
    setTimeout(function(){
        cb()
    },5000)
}
getsomedata("Rohan",function(){
    console.log("Data saved in server.")
})


const pr = new Promise(function(res,rej){
     console.log("Server pr jaao")
     console.log("data laao")
     console.log("Data...")
     res()
})

pr.then(function(){
    console.log("Resolved");
}).catch(function(){
    console.log("Reject");
});