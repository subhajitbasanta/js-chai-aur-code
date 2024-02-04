class user {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}jit`
    }

    set password(value){
        this._password = value

    }
}

const subha = new user("subha@ai.com", "abc");
console.log(subha.password);
console.log(subha.email);