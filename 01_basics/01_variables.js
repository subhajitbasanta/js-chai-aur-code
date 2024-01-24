const accountId=14456;
let accountEmail="subha@gmail.com";
var accountPassword="12345";
accountCity="West Bengal";
let accountState;

//accountId=1;  //not allowed

accountEmail="hc@hc.com";
accountPassword="212234";
accountCity="Delhi";

//console.log(accountId);
/*  
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])