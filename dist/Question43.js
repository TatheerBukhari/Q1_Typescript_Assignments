"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Function to add 'Great' to each magician's name
function makeGreat(magicians) {
    const greatMagicians = magicians.map((magician) => `Great ${magician}`);
    return greatMagicians;
}
// Function to display the magicians' names
function showMagicians(magicians) {
    magicians.forEach((magician) => console.log(magician));
}
// Test the functions
const magicians = ['Houdini', 'Copperfield', 'Penn', 'Teller'];
// Call makeGreat with a copy of the original array
const greatMagicians = makeGreat([...magicians]);
// Show the original magicians
console.log('Original Magicians:');
showMagicians(magicians);
// Show the magicians with 'Great' added
console.log('\nMagicians with "Great" Added:');
showMagicians(greatMagicians);
