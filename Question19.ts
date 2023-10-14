


// Initial guest list
let dinnerGuests: string[] = [
    "Albert Einstein",
    "Leonardo da Vinci",
    "Marie Curie",
    "Isaac Newton",
    "Galileo Galilei",
    "Nikola Tesla",
    "Charles Darwin"
];

// Calculate the number of people you are inviting to dinner
const numberOfInvitations = dinnerGuests.length;


console.log("Initial guest list:");
for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

// Exercise 16: Shrinking Guest List
console.log("\nSorry, we can invite only two people for dinner.");

while (dinnerGuests.length > 2) {
    const removedGuest = dinnerGuests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

console.log(`\nThe two remaining guests are still invited.`);
for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}

// Remove the last two names to have an empty list
dinnerGuests.splice(0, dinnerGuests.length);

// Print the updated guest list (should be empty)
console.log("\nUpdated guest list (empty):");
console.log(dinnerGuests);

// Print the number of people you are inviting to dinner
console.log(`Number of people invited to dinner: ${numberOfInvitations}`);
