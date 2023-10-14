"use strict";
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
Object.defineProperty(exports, "__esModule", { value: true });
const personNameWithWhitespace = '\t \n Tatheer Fatima \n\t';
console.log(`Name with Whitespace: ${personNameWithWhitespace}`);
const strippedName = personNameWithWhitespace.trim();
console.log(`Stripped Name: "${strippedName}"`);
