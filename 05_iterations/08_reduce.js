const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// },0)

// console.log(myTotal);

// const myTotal = myNums.reduce((acc,currval) => acc + currval , 0);

// console.log(myTotal);


const shoppingcart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dv course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const total = shoppingcart.reduce((acc,item) => item.price + acc , 0)

console.log(total);