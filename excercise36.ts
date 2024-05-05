/* excercise No 36 : T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function. */

// solution :

function make_shirt(size: string , message: string): void {
    console.log(`you have ordered a ${size} shirt with the following message :"${message}".`)
}

// invoke the function :

make_shirt('Large','Versace ZARA');