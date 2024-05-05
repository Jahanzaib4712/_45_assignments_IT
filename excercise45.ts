/* excercise No 45 : Cars: Write a function that stores information about a car in a Object. 
 The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
 Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
 Print the Object that’s returned to make sure all the information was stored correctly. */


 // solution : 

 function  storeCarInfo(manufacturer:string, modelNames:string, ...exterOption:{[key :string]: any}[]):object{
    const carInfo={
        manufacturer,
        modelNames,
        ...Object.assign({}, ...exterOption)

    }
    
    return carInfo;
}

const carInfo = console.log('Honda','Civic',{color:'black'}, {facturer:['Navigation','power Window']})
console.log('carInfo');