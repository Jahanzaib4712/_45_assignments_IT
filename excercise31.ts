/*se No 31 : No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */

let users = ['John', 'Jane', 'Alice', 'Bob'];

// Check if the array is empty
if (users.length === 0) {
    console.log('We need to find some users!');
} else {
    // Remove all usernames
    users = [];
    console.log('All usernames have been removed.');
}

// Print the updated array
console.log(users);