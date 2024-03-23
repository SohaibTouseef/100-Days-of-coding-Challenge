"use strict";
// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
Object.defineProperty(exports, "__esModule", { value: true });
// original function for calculating the area of a rectangle 
function calculateArea(width, height) {
    return width * height;
}
// Refactorad into an arrow function
let calculateAreaArrow = (width, height) => width * height;
// Example usage of the arrow function
console.log(calculateAreaArrow(5, 7));
// logs the area of the rectangle
