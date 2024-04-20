
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.

// In another file where you want to use the add function:

function addition (num1:number , num2:number) {
    return num1 + num2;
}
export default addition;