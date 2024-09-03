// Function to add two numbers
function add(a, b) {
    console.log("Hii");
    return a + b;
    console.log("Bye"); // This line will never be executed
    console.log("End"); // This line will never be executed
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

// Example usage
console.log(add(5, 3));        // Output: Hii 8
console.log(subtract(5, 3));   // Output: 2
console.log(multiply(5, 3));   // Output: 15
console.log(divide(5, 3));     // Output: 1.6666666666666667
console.log(divide(5, 0));     // Output: Error: Division by zero