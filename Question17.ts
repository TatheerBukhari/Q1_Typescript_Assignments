/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/



// Initial guest list
let guestList: string[] = [
    "Albert Einstein",
    "Leonardo da Vinci",
    "Marie Curie",
    "Isaac Newton",
    "Galileo Galilei",
    "Nikola Tesla",
    
];

// Printing the initial guest list
console.log("Initial guest list:");
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}



// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table.\n");

// Add new guests
guestList.unshift("Galileo Galilei"); // Add to the beginning

// Use splice to add a new guest to the middle without specifying the index
guestList.splice(guestList.length / 2, 0, "Nikola Tesla"); // Add to the middle

guestList.push("Charles Darwin"); // Add to the end

console.log("Updated guest list:");
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}


console.log("\nThe Two Remaning you are still invited\n");

while(guestList.length>2){
    const removedGuest=guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner`);

    
}

console.log("\nThe two remaining guest are still invited to dinner\n");

for(const guest of guestList){
    console.log(`Dear ${guest}, you are still invited to`);
    
}

guestList.splice(0,guestList.length);

console.log("\nUpdated guest list (empty):\n");
console.log(guestList);
