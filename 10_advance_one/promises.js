// const PromiseOne = new Promise(function(resolve,reject){

    // Do an async task
    // DB call , Cryptography , Network
    
//    setTimeout(function(){
//         console.log("Async task is completed");
//         resolve();
//     },1000)
    
// })

// PromiseOne.then(() =>{
//     console.log("Promises consumed");
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     },1000)
    
// }).then(function(){
//     console.log("Async 2 resolved");
// })


// const PromiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({userName:"Subhajit",email:"subha123@gmail.com"})
//     },1000)
// })

// PromiseThree.then(function(user){
//     console.log(user);
// })

// const PromiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({userName: "Subha",password: "1234"})
//         }else{
//             reject("ERROR: Something went wrong")
//         }
//     },1000)
// })

// PromiseFour.then((user) =>{
//     console.log(user);
//     return user.userName;
// }).then((userName) =>{
//     console.log(userName);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The Promise is either resolved or rejected"));



const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName: "Subhajit",password: "1234@87"})
        }else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await PromiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E : ",error);
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json();
})
.then((data) =>{
    console.log(data);
}).catch((error) =>{
    console.log(error);
})


