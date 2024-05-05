/* excercise No 42 :  Great Magicians: Start with a copy of your program from Exercise 39.
     Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
     Call show_magicians() to see that the list has actually been modified. */



// solution : 


let magician : string[] =['Harry Potter','Hermione Granger','Ron Weasley','Albus Dumdore'];

function make_great(magicianArry:string[]){

      for(let i=0; i<magicianArry.length; i++){

         magician[i] = 'the Great' + magicianArry[i]
      }
}

function show_magician(magician:string[]){

   magician.forEach(element =>{
      console.log(element);
   })
}

make_great(magician);
show_magician(magician);