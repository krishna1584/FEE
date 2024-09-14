//scope: Scope refers to the visibility of variables in different parts of the code. Variables can be declared in different scopes, which determines where they can be accessed and modified. There are four types of scope in JavaScript:

// 1. Global Scope: Variables declared outside any function or block are in the global scope and can be accessed from anywhere in the code.
// 2. Function Scope: Variables declared within a function are in the function scope and can only be accessed within that function.
// 3. Block Scope : Variables declared with let or const within a block (e.g., if statement, loop) are in block scope and can only be accessed within that block.
// 4. Lexical Scope: Functions are executed using the scope chain, which means they can access variables from their own scope, the outer function's scope, and the global scope.

// Example of Global Scope by default all variables are in global scope
let a = "Global Scope";
var b = "Global Scope with var";
const c = "Global Scope with const";

function globalScopeExample() {
    console.log(a); // "Global Scope"
    console.log(b); // "Global Scope with var"
    console.log(c); // "Global Scope with const"
}

globalScopeExample();
console.log(a); // "Global Scope"
console.log(b); // "Global Scope with var"
console.log(c); // "Global Scope with const"


// Example of Function Scope: Variables declared within a function are not accessible outside of that function
function functionScopeExample() {
    let d = "Function Scope";
    var e = "Function Scope with var";
    const f = "Function Scope with const";
    console.log(d); // "Function Scope"
    console.log(e); // "Function Scope with var"
    console.log(f); // "Function Scope with const"
}

functionScopeExample();
// console.log(d); // ReferenceError: d is not defined
// console.log(e); // ReferenceError: e is not defined
// console.log(f); // ReferenceError: f is not defined