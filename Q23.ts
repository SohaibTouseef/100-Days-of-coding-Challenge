// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.



let car : string = 'subaru';
//test 1 :  Equality comparison (true)
console.log("Is car == 'subaru' ? I predict True.");
console.log(car == 'subaru'); // true

//test 2 :  Strict comparison (true)
console.log("Is car === 'subaru' ? I predict True.");
console.log(car == 'subaru'); // true

//test 3 :  Inequality comparison (False)
console.log("Is car != 'subaru' ? I predict False.");
console.log(car != 'subaru'); // false

//test 4 :  Inequality comparison (False)
console.log("Is car !== 'subaru' ? I predict False.");
console.log(car !== 'subaru'); // false

//test 5 :  less than comparison (False)
console.log("Is car < 'subaru'? I predict False.");
console.log(car < 'subaru'); // false (Iexicographic comparson)

//test 6 :  Greter than comparison (False)
console.log("Is car > 'subaru'? I predict False.");
console.log(car > 'subaru'); // false (Iexicographic comparson)

//test 7 :  less than comparison (true)
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru'); // true (Iexicographic comparson)

//test 8 :  Greter than comparison (true)
console.log("Is car >= 'subaru'? I predict truee.");
console.log(car >= 'subaru'); // true (Iexicographic comparson)

// test 9 : checking truthiness (true)
console.log("Is car? I predict True.");
console.log(car); // true (non -empty string is truthy)




