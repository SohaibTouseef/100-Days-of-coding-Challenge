"use strict";
let car = 'subaru';
let age = 25;
let number = [1, 2, 3, 4];
// test 1: Equalit (true)
console.log("Is car == 'subaru'? I predict true.");
console.log(car == "subaru"); // True (case-insensitive)
// test 2: Equalit (true)
console.log("Is car === 'subaru'? I predict False.");
console.log(car === "subaru"); // false (case-insensitive)
// test 3: Inequality (true)
console.log("Is car !=  'subaru'? I predict true.");
console.log(car != "subaru"); // true (case-insensitive)
// test 4: Inequality (false)
console.log("Ions car !==  'subaru'? I predict False.");
console.log(car !== "subaru"); // false (case-insensitive)
// **lowercase function tests**
// Test 5 :  lowercase convertsion (True)
console.log("Is car.tolowerCase() == 'subaru'? I predict true");
console.log(car.toLowerCase() == 'sabaru'); //true (converted to lowercase)
// Test 6 :  lowercase convertsion (false)
console.log("Is car === car.toLowerCase()? I predict False");
console.log(car === car.toLowerCase()); //false (converted to uppercase)
// **numerical tests**
// Test 7: Equality (true)
console.log("Is age == 25? I predict True.");
console.log(age == 25); // True
// ** Inequality **
// Test 8: Equality (false)
console.log("Is age != 30? I predict false.");
console.log(age != 30); // false
// Test 9 : greater than (false)
console.log("Is age > 30? I predict false.");
console.log(age > 30); // false
// Test 10 : greater than (true)
console.log("Is age >= 25? I predict true.");
console.log(age >= 25); // true
//**Logical Oppertors**
// Test 11: AND True
console.log("It age > 20 && age < 30? I predict True.");
console.log(age > 20 && age < 30); //True (both conditions met)
// Test 12: OR (false)
console.log("It age > 30 || age < 18? I predict false.");
console.log(age > 30 || age < 18); //false (meither conditions met)
//**Array Tests**
//Test 13: In array (True)
console.log("It 3 in number? I predict True.");
console.log(3 in number); // true (check for index existence)
//Test 14 : NOT In array (True)
console.log("It 5 not in number? I predict True.");
console.log(5 in number); // true (negation of "in operator")
