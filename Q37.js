"use strict";
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size = "large", text = "I Love typescript") {
    console.log(`you have order a ${size}, Shirt that says ${text}`);
}
makeShirt();
makeShirt("medium");
//different massage
makeShirt("small", "I need a big shirt to wear");
