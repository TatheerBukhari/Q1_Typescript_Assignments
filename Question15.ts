/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/


// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// 
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.




const guests:string[]=["Alice","Maria","Diana"];

for(const guest of guests){
    console.log(`  You will invited to Dinner ${guest.toUpperCase()}: `);
    
    

}

const Guestnotavailable:string="Alice";
const removedguest=(guests.pop() )
console.log(`${Guestnotavailable}  can't make it to the dinner`);
if(removedguest === Guestnotavailable){
   const newguest:string="Maya";
   guests.push(newguest);

   console.log("Update guestslist");
   for (const guest of guests){
 console.log(`Dear ${guest}, you are invited to dinner.`);

   }

   
}