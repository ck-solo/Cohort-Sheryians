// Solution 1✅
// function orderfood(){
//     return new Promise(function(res,rej){
//          setTimeout(() => {
//              let time = Math.random()
//              if(time < 0.7)  res()
//                  else rej()
//          }, 2000);
         
//     });
// }

// orderfood().then(function(){
//     console.log("🍕Pizza delivered!")
// }).catch(function(){
//     console.log("🚫 Delivery failed")
// })


// ++++++++++++++++++++++
// Solution 2
// function getuser(){
//     return new Promise(function(res,rej){
//         setTimeout(() => {
//             res({id : 1, name :"ronak"})
//         }, 1000);
//     })
// }

// function getPosts(userid){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(["titles1" ,"title2"])
//         }, 2000);
//     })
// }

// function getcomments(postid){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(["Great","Loved","Outstanding"])
//         }, 3000);
//     })
// }


// getuser()
// .then(function(data){
// console.log(`data fetch userid :- ${data.id}`)
// return getPosts(data.id);
// })
// .then(function(titles){
// console.log(titles)
// return getcomments("postid");
// })
// .then(function(comments){
//     console.log(comments)
// }).finally(function(){
//     console.log("All function working...")
// })

// +++++++++++++++++++++++++++

// Solution3

function fakeApi(endpoint){
    const data = {
         name : ["harshad", "Mohit","Sinnu","Ronak"],
         hobby : ["swimming","pool","horseriding","chess"]
    };
    let delay = Math.random * 2000 + 1000;
    return  new Promise(function (res,rej){
        setTimeout(function(){
            res(data[endpoint])
        }, delay);

     })
}
fakeApi("hobby").then(function(data){
    console.log(data)
})
fakeApi("name").then(function(data){
    console.log(data)
})