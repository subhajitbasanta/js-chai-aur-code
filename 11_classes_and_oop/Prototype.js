let myName = "Subha    ";
let myVai = "Avi   ";

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.subha = function(){
    console.log(`subha is present in all objects`);
}

Array.prototype.heySubha = function(){
    console.log(`Subha says hello`);
}

// heroPower.subha();
// myHeros.subha();

// myHeros.heySubha();
// heroPower.heySubha();


// inheritance

const User = {
    name: "Subha",
    email: "subha@mail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// Modern Syntex

Object.setPrototypeOf(TeachingSupport,Teacher);

let anotherUserName = "Basantafamily   ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}  

anotherUserName.trueLength();
"subha".trueLength();
"iceTea".trueLength();