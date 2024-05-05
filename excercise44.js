/* excercise No 44 :

Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
    The function have one parameter that collects as many items as the function call provides,
    and it should print a summary of the sandwich that is being ordered.
    Call the function three times, using a different number of arguments each time. */
// solution :
function makeSandwish(item) {
    console.log('Making your sandwish with:');
    item.forEach(element => console.log("-" + element));
    console.log('Enjoy your sandwish');
}
makeSandwish(['Ham', 'Chesse', 'lettuce',]);
makeSandwish(['Turkey', 'Bcon']);
makeSandwish(['Peanut butter', 'Jelly']);
export {};
