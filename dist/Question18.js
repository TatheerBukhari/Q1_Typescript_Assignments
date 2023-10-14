"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
Object.defineProperty(exports, "__esModule", { value: true });
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let placesToVisit1 = ["Paris", "Tokyo", "Rome", "New York", "Sydney"];
// Exercise 17 - Part 2: Print original order
console.log("Original Order:", placesToVisit1);
// Exercise 17 - Part 3: Print alphabetical order
console.log("Alphabetical Order:", [...placesToVisit1].sort());
// Exercise 17 - Part 4: Show original order is preserved
console.log("Original Order (Still):", placesToVisit1);
// Exercise 17 - Part 5: Print reverse alphabetical order
console.log("Reverse Alphabetical Order:", [...placesToVisit1].sort().reverse());
// Exercise 17 - Part 6: Show original order is preserved
console.log("Original Order (Still):", placesToVisit1);
// Exercise 17 - Part 7: Reverse the order of the list
placesToVisit1.reverse();
console.log("Reversed Order:", placesToVisit1);
// Exercise 17 - Part 8: Reverse the order again to get back to the original order
placesToVisit1.reverse();
console.log("Original Order (Again):", placesToVisit1);
// Exercise 17 - Part 9: Sort the list in alphabetical order
placesToVisit1.sort();
console.log("Alphabetical Order (Sorted):", placesToVisit1);
// Exercise 17 - Part 10: Sort the list in reverse alphabetical order
placesToVisit1.sort().reverse();
console.log("Reverse Alphabetical Order (Sorted):", placesToVisit1);
