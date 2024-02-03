function setUserName(username){
    // complex DB calls
    this.username = username;
    console.log("Called");
}

function createUser(username,password,email){
    setUserName.call(this,username);
    this.password = password;
    this.email = email;
}

const creat = new createUser("Subha", "123@#", "subha@fb.com");
console.log(creat);