/* excercise No 43 : Unchanged Magicians: Start with your work from Exercise 40.
 Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged,
 return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */
// solution : 
let magician = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumdore'];
function copyArry(arr) {
    return [...arr];
}
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magician[i] = 'the Great' + magicianArry[i];
    }
}
function show_magician(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArry = copyArry(magician);
make_great(copyMagicianArry);
console.log('\n\nThis is my orignal arry:');
show_magician(magician);
console.log('\n\nThis is my modified copy of the arry:');
show_magician(magician);
export {};
