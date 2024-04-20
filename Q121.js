"use strict";
// Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
Object.defineProperty(exports, "__esModule", { value: true });
// This for loop counts from 1 to 10 but skips 5
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skips the rest of the loop for i = 5
    }
    console.log(i); // Logs numbers 1-4 and 6-10
}
// It demonstrates how to use 'continue' to skip a specific iteration.
