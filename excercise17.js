//exercise 17 : Shrinking Guest List :
/* You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests..*/
//solution:
let moreGuests = ["Ali", "Umar", "farrukh", "sultan", "usama ", "ahmed"];
let limitedGuestList = moreGuests.slice(0, 2);
limitedGuestList.forEach(newguest => {
    console.log("hello " + newguest, "I would like you to invite to dinner tonight");
});
export {};
