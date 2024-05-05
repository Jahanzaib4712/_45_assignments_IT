/* excercise No 37 :Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
   Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */



   // solution : 

function makeshirt(size : string = 'Large' , message : string = ' I Love Typescript'): void {
    console.log(`You have ordered a ${size } shirt with the following message:${message}.`);
}

// Making a large shirt with the default message
makeshirt();

// Making a medium shirt with the default message
makeshirt('medium');

// Making a shirt of any size with a different message

makeshirt('Small', 'Hello, World!');