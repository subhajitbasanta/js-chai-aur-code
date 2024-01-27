// Immediately Invoked Function Expressions (IIFE) is javaScript function that runs as soon as it is designed.
// It is designed pattern which is also known as a self-Executing Anonymous Function.

/*  Use cases---> Avoid polluting the global namespace : Because our application could include many functions and global 
variables from different source FileSystem,it's important to limit the number of global variables.If we have some inition 
code that we don't need to use again,we could use the IIFE pattern.As we will not reuse the code again,using IIFE in 
this case is better than using a function declaration or a function expression.

*/

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("Subha")