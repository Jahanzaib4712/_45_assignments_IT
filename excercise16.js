//exercise 16 : More Guests :
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.*/
//solution:
let moreGuests = ["Ali", "Umar", "farrukh", "sultan"];
console.log("Guys!, i have found a bigger table for our dinner, so i am inviting more guests.");
moreGuests.unshift("salahuddin ayubi");
moreGuests.splice(3, 0, "usama");
moreGuests.push("khalid");
moreGuests.forEach(moreGuests => {
    console.log(" hey " + moreGuests, "i would like to invite you to dinner tonight");
});
export {};
