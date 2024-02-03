class user {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USER NAME IS: ${this.username}`);
    }
}

class Teacher extends user {
    constructor(username, password, email){
        super(username);
        this.password = password;
        this.email = email;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const createUser = new Teacher("Subha", "123", "subha@mail.com")
createUser.addCourse();

const newCreateUser = new user("Satyajit");
newCreateUser.logMe();

console.log(createUser === newCreateUser);
console.log(createUser instanceof Teacher);
console.log(newCreateUser instanceof user);
console.log(Teacher instanceof user);
console.log(createUser instanceof user);