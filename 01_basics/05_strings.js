const name = "Subhajit";
const repoCount = 50;

//  console.log(name + repoCount + " value");

//  console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("Subha-sb");
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('b'));

// const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-3);
console.log(anotherString);


const newStringOne = "     Subha   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://subhajit.com/subha%20basanta";

console.log(url.replace('%20','@'));

console.log(url.includes('subha'));
console.log(url.includes('satya'));

console.log(gameName.split('-'));