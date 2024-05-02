 /* excercise No : 24  : More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */


//                                                       :   MY PREDICTIONS  :

// Tests for equality and inequality with strings
let string1 = "hello";
let string2 = "HELLO";

console.log("Is 'hello' == 'HELLO'? I predict False.");
console.log(string1 == string2);

console.log("Is 'hello' != 'HELLO'? I predict True.");
console.log(string1 != string2);

// Tests using the lower case function
console.log("Is 'Hello' converted to lowercase 'hello'? I predict True.");
console.log("Hello".toLowerCase() == "hello");

// Numerical tests
let num1 = 10;
let num2 = 5;

console.log("Is 10 == 5? I predict False.");
console.log(num1 == num2);

console.log("Is 10 > 5? I predict True.");
console.log(num1 > num2);

console.log("Is 10 < 5? I predict False.");
console.log(num1 < num2);

console.log("Is 10 >= 10? I predict True.");
console.log(num1 >= num1);

console.log("Is 10 <= 5? I predict False.");
console.log(num1 <= num2);

// Tests using "and" and "or" operators
console.log("Is (10 > 5) && (5 < 10)? I predict True.");
console.log((num1 > num2) && (num2 < num1));

console.log("Is (10 < 5) || (5 < 10)? I predict True.");
console.log((num1 < num2) || (num2 < num1));

// Test whether an item is in an array
let num = [1, 2, 3, 4, 5];

console.log("Is 3 in the num [1, 2, 3, 4, 5]? I predict True.");
console.log(num.includes(3));

// Test whether an item is not in an array
console.log("Is 6 not in the array [1, 2, 3, 4, 5]? I predict True.");
console.log(!num.includes(6));


 //        ::  MY ALL PREDICTIONS IS RIGHT ::