// //object data type
// //object is a collection of key value pairs
// //object is a non primitive data type
// //object is a reference data type
// //object is a mutable data type
// //object is a unordered data type
// //object is a collection of properties


// //object can be created in 2 ways : constructor and literal



// // A: Constructor:

// const obj = new Object();
// obj.name = "Krishna";
// obj.age = 19;
// obj.city = "CHD";

// console.log(obj.name); // Output: Krishna
// console.log(obj.age); // Output: 19
// console.log(obj.city); // Output: CHD



// // B: Literal:
// // Define an object
// const person = {
//     name: "Krishna",
//     age: 19,
//     city: "Chandigarh"
// };

// // Access object properties
// console.log(person.name); // Output: John
// console.log(person.age); // Output: 30
// console.log(person.city); // Output: New York

// // Modify object properties
// person.age = 35;
// console.log(person.age); // Output: 35

// // Add new properties to an object
// person.gender = "Male";
// console.log(person.gender); // Output: Male

// // Delete a property from an object
// delete person.city;
// console.log(person.city); // Output: undefined



// const users = {
//     user1: {
//         name: 'Krishna',
//         age: 18,
//     },
//     user2: {
//         name: 'BRUH',
//         age: 19,
//     },
//     user3:{
//         name: 'Prateek',
//         age: 20,
//     },
// }

// console.log(users);
// console.log(users.user2);
// console.log(users.user2.age);
// users.user2.name="Keshav";
// console.log(users.user2.name);
// console.log(users.user2);


const arr = [
     {
        user1: {
            name: 'Krishna',
            age: 18,
        },
        user2: {
            name: 'BRUH',
            age: 19,
        },
        user3:{
            name: 'Prateek',
            age: 20,
        }
    }

];

console.log(arr[0].user1.name); 
console.log(arr[0].user2.name); 
console.log(arr[0].user3.name); 
