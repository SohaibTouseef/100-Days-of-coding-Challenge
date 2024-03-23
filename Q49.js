"use strict";
// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
Object.defineProperty(exports, "__esModule", { value: true });
// Defines a fuction that accepts multip hobbies as argument
function logHobbies(...hobbies) {
    // loops through each hobbyb in the arry
    hobbies.forEach((hobby) => {
        // logs a statement for each hobby
        console.log(`I enjoy $ {hobby}.`);
    });
}
// Call the function with three hobbies
logHobbies("Reading", "coding", "Cycling");
