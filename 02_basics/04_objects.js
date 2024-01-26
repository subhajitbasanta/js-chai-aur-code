// const tinderUser = new Object()   // --->Singletone Object
 const tinderUser = {}     // Not singletone object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;


// console.log(tinderUser);

const regularUser = {
    emaim: "sombir@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nitesh",
            lastname: "Modi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a",2: "b"};
const obj2 = {3: "a",4: "b"};
const obj3 = {5: "a",6: "b"};

// const obj4 = {obj1, obj2};
// const obj4 = Object.assign({},obj1,obj2,obj3);

// Spread
const obj4 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "subha@mail.com"
    },
    {
        id: 1,
        email: "subha@mail.com"
    },
    {
        id: 1,
        email: "subha@mail.com"
    }
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
