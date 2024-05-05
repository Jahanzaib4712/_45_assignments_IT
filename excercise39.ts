/* excercise No 39 : City Names: Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.  */

// solution : 

function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the function with three city-country pairs
let city1 = cityCountry('Lahore', 'Pakistan');
let city2 = cityCountry('Paris', 'France');
let city3 = cityCountry('Tokyo', 'Japan');

console.log(city1);
console.log(city2);
console.log(city3);
