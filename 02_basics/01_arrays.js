/* Array : JavaScript arrays are resizable and can 
contain a mix of different datatypes.

JavaScript arrays are not associative arrays and so,
array elements cannot be accessed using arbitrary strings
as indexes.

JavaScript Arrays are zero-indexed.

JavaScript array-copy opertions create shallow-copies
rather than deep copies.

Shallow copy : A shallow copy of an object is a copy
whose properties share the same references.

Deep Copy : A deep copy of an object is a copy whose
properties do not share the same references.


*/
const myArr = [0, 1, 2, 3, 4, 5];
// console.log(typeof myArr);

const myHeros = ["shaktiman","naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

//  Array Methods 

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join();


// console.log(myArr);
// console.log(typeof myArr);
// console.log(newArr);
// console.log(typeof newArr);


//  ***** Slice , Splice *****


console.log("A ", myArr);

const myNewArr = myArr.slice(1,3);
console.log(myNewArr);

console.log("B ",myArr);

const myNewArr2 = myArr.splice(1,3);
console.log(myNewArr2);
console.log("C ",myArr);
