"use strict";
// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
// This function sees if both inputs are true
function checkBothTrue(val1, val2) {
    // Only says true if both val1 and val2 are true
    return val1 && val2;
}
// Trying it with true and false
console.log(checkBothTrue(true, false)); // Shows false
// It checks two things, but since one is false, the answer is false.
