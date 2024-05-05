/* excercise No 35 : Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet.
    • Add a line at the end of your program stating what these animals have in common. 
    You could print a sentence such as Any of these animals would make a great pet! */

    // solution :

    let Animals : string[] = ["Dog","Cat","Rabbit"];

    for (let i =0 ; i < Animals.length; i++) {
        console.log(Animals[i]);
    }

    //printing a statement about each animal 
    console.log("\nPrinting statements:");
    for (let i =0;i < Animals.length; i++) {
console.log(`A ${Animals[i].toLowerCase()} would make a great pet.`);

    }

    // Printing what these animals have in common
    console.log("\nAny of these Animals would make a great per!");