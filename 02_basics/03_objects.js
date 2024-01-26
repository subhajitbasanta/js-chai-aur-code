// Singleton -> Constractor method used to create object.
// object.create


// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Subhajit",
    "full name": "Subhajit Basanta",
    [mySym]: "mykey1",
    age: 21,
    location: "Jhargram",
    email: "subhajit@google.com",
    isLoggedIn: false,
    lastLogingDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);   //This approach is better than previous
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "subha@gpt.com";
// Object.freeze(JsUser);
// JsUser.email = "subhajit@microsoft.com";
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

// console.log(JsUser.greeting);
// console.log(JsUser.greeting());

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());