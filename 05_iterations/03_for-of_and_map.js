// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5];
for (const val of arr) {
    // console.log(val);   
}

const greetings = "Hello World";
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


//  Map

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");

// console.log(map);

for (const [key,value] of map) {
   // console.log(key,":-", value);
}

const myObj = {
    game1 : "spiderman",
    game2 : "BGMI"
}

// for (const [key,value] of myObj) {
//     console.log(key,':-',value);
// }