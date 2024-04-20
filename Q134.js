"use strict";
// Question 134: Take a JSON string and parse it into a JavaScript object.
Object.defineProperty(exports, "__esModule", { value: true });
// Defines a JSON string
const jsonString = '{"name":"Alice","age":30,"city":"Wonderland"}';
// Parses the JSON string back into a JavaScript object
const person = JSON.parse(jsonString);
console.log(person); // Outputs the original object
// This snippet shows how to take a JSON string and convert it back into a JavaScript object.
