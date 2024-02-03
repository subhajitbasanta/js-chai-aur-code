// class user{
//     constructor(username, password, mail){
//         this.username = username;
//         this.password = password;
//         this.mail = mail;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const createUser = new user("Subha", "123","subha@mail.com")
// console.log(createUser.encryptPassword());
// console.log(createUser.changeUserName());


// Behind the scene

function user(username, password, mail){
    this.username = username;
    this.password = password;
    this.mail = mail;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`;
}

const createUser = new user("Subha", "123","subha@mail.com")
console.log(createUser.encryptPassword());
console.log(createUser.changeUserName());
