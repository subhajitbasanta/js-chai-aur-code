// Object Literals
const user = {
    username: "Subha",
    loginCount: 7,
    signedIn: true,

    getuserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getuserDetails());
// console.log(this);


// Constructor function

// const PromiseOne = new Promise();
// const date = new Date();

function User(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

     return this;
}

const userOne = new User("Subha", 12, true);
const userTwo = new User("Somu", 11, false);

console.log(userOne);
console.log(userTwo);


// ***** new *****
// step1: Create an Object.
// step2: Pass on into object.
// step3: This create
// step4: Add into this