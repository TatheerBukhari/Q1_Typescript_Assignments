"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
const personname = "Tatheer Fatima:";
console.log(`UpperCase: ${personname.toUpperCase()} `);
console.log(`lowercase:${personname.toLowerCase()}`);
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log(`TitleCase: ${toTitleCase(personname)} `);
