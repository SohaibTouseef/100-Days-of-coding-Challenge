// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

// original function for calculating the area of a rectangle

function calculateArea(width: number, height: number): number {
  return width * height;
}

// Refactorad into an arrow function
let calculateAreaArrow = (width: number, height: number): number =>
  width * height;

// Example usage of the arrow function

console.log(calculateAreaArrow(5, 7));
// logs the area of the rectangle
