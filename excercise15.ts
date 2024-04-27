
// Excercise 15 : 
/* Changing Guest List: You just heard that one of your guests can’t make the dinner,
 so you need to send out a new set of invitations. You’ll have to think of someone else to invite.*/


let guestList: string[] = ["Albert Einstein", "Imran Khan ", "Marie Curie"];

// Assuming Marie Curie can't make it, let's replace her with Nikola Tesla
let newGuestList: string[] = [...guestList]; // Copy the original list
let indexOfMarieCurie = newGuestList.indexOf("Marie Curie");
if (indexOfMarieCurie !== -1) {
    newGuestList.splice(indexOfMarieCurie, 1, "Tony Stark");
}

// Print the new set of invitations
newGuestList.forEach(guest => {
    console.log(`Aziz ${guest}, main aapko dinner ke liye invite karna chahta hoon. Agar aap humare saath shamil hona chahte hain toh please mujhe bataiye.`);
});
