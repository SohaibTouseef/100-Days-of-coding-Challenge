"use strict";
// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
// A mixed bag of items
let mixedArray = [1, "apple", 2, "banana", true, "carrot"];
// Picks out only the words
let stringsArray = mixedArray.filter(item => typeof item === "string");
// Shows the list of just words
console.log(stringsArray); // Output: ["apple", "banana", "carrot"]
// This line checks each item: if it's a word, it goes into the new list.
