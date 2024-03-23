// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

let laptop = [
  { make: "Dell", model: "Xps 15", year: 2021 },

  { make: "Apple", model: "Mackbook pro", year: 2020 },

  { make: "Hp", model: "Spectre x360", year: 2021 },
];
let [laptop1, laptop2] = laptop;
console.log(laptop1);
console.log(laptop2);
