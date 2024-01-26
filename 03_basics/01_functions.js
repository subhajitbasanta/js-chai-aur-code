function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
}   

// sayMyName();

// function addTwoNumbers(number1,number2){
//     console.log((number1 + number2));
// }

function addTwoNumbers(number1,number2){
    // let result = number1 + number2;
    // return result;
    return (number1 + number2);
}

const result = addTwoNumbers(6,8);

// console.log("Result: ", result);

function loginUserMessage(username = "Somu"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Subha"));
// console.log(loginUserMessage());

function calculateCARprice(val1,val2, ...num1){
    return num1;
}

// console.log(calculateCARprice(200,300,400,600));

const user = {
    username: "Subha",
    price: 200
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and
    price is ${anyobject.price}`);
}

// handleObject(user);

handleObject({
    username: "Sam",
    price: 500
})

const myNewArray = [200,300,700,900];

function returnSecondValue(getArray){
    return getArray[3];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400]));