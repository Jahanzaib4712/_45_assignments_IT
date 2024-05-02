/*excercise No 22 : Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. 
Make sure you correct the error before closing the program*/
 

// Solution :                                          BEFORE  : WITH ERROR

const array = ["ahmed ", "haris", "ali"];

// Trying to access an index that is out of bounds (index 10)
const element = array[4];

console.log(element); // This line will cause an index error



//                                                       AFTER : WITHOUT ERROR


const NAMES = ["AHMED" , "ALI" , "UMER"];

const FRIENDS = array[2];

console.log(FRIENDS); 