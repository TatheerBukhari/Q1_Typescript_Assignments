
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Great Magicians
// Great Magicians
function makeGreat(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (const magician of magicians) {
    greatMagicians.push(`the Great ${magician}`);
  }
  return greatMagicians;
}

// Show Magicians
function showMagicians(magicians: string[]): void {
  magicians.forEach(magician => console.log(magician));
}

const magicians: string[] = ['Houdini', 'Copperfield', 'Penn', 'Teller'];

const greatMagicians: string[] = makeGreat(magicians);

// Show the modified magicians
console.log('Great Magicians:');
showMagicians(greatMagicians);

  