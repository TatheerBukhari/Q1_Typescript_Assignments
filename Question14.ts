// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let Guestlist:string[]=["John Due","Alice","Maya Angelou"];
 for(const guest of Guestlist){
    console.log(` ${guest.toUpperCase()}: You will invited to Dinner `);
 }