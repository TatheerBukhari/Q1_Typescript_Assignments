"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
Object.defineProperty(exports, "__esModule", { value: true });
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let string1 = "Tatheer";
let string2 = "Fatima";
console.log(string1 === string2); // False
console.log(string1 !== string2); // True
const test = "HELLO WORLD";
const newtest = test.toLowerCase();
console.log(newtest === test); // False
console.log(newtest !== test); // True
let num1 = 10;
const num2 = 20;
num1 = num2;
console.log(num1 == num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // False
console.log(num1 < num2); // True
console.log(num1 >= num2); // False
console.log(num1 <= num2); // True
const isTrue = true;
const isFalse = false;
console.log(isTrue && isFalse); // False (AND)
console.log(isTrue || isFalse); // True (OR)
const fruits = ["apple", "banana", "cherry"];
const searchFruit = "orange";
console.log(fruits.includes(searchFruit)); // False
