"use strict";
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
// In another file where you want to use the add function:
function addition(num1, num2) {
    return num1 + num2;
}
exports.default = addition;
