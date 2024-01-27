const user = {
    username: "Subha",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     console.log(this);
// }
// chai();

//this not working in function
// function chai(){
//     let username = "Subha";
//     console.log(this.username);
// }
// chai();

// const chai = function () {
//     let username = "Subha";
//     console.log(this.username);
// }
// chai();

const chai = () =>{
    let username = "Subha";
    console.log(this);
}
// chai();

// const addTwo = (num1,num2) =>{
//     return num1 + num2;
// }

// const addTwo = (num1,num2) => num1 + num2;

// const addTwo = (num1,num2) => (num1 + num2);

const addTwo = (num1,num2) => ({username: "Subha"});

console.log(addTwo(3,4));