class user {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USER NAME: ${this.username}`);
    }
    static createId(){
        return `123`;
    }
}

const subha = new user("Subha");
// console.log(subha.createId());

class Teacher extends user{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("Subhajit", "subha@34gmail.com");
console.log(iphone);