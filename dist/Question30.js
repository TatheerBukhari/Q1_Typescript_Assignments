"use strict";
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
Object.defineProperty(exports, "__esModule", { value: true });
const usernames = ['admin', 'Eric', 'John', 'Alice', 'admin'];
console.log('Hello admin, would you like to see a status report?');
console.log(`Hello ${usernames[1]}, thank you for logging in again.`);
console.log(`Hello ${usernames[3]}, thank you for logging in again.`);
console.log(`Hello ${usernames[2]}, thank you for logging in again.`);
console.log(`Hello ${usernames[0]} would you like to see a status report?`);
