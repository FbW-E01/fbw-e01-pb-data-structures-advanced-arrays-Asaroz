// 1. Get total orders
// Return the total amount of orders.
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];
const first = 0
const total_orders = orders.reduce(function (acc,current){
return acc+current.amount
},first)
console.log(total_orders)
console.log("________________________")
// 2. Increment by 1
// const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
// Create a function that increments each element in the arrayOfNumbers by 1. Return the a new array of modified elements.
const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
const array_increment = arrayOfNumbers.map(x => x+1)
console.log(array_increment)

console.log("________________________")
// 3. Filter Evens
// Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

// Examples:

// filterEvens([1,2,3,11,12,13]); //returns [2,12]
// filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]

function filterEvens(array){
    return array.filter(x => x %2 ===0)
}
console.log(filterEvens([1,2,3,11,12,13]))
console.log(filterEvens([22,2,31,110,6,13]))
console.log("________________________")
// 4. Filter Friends
// Given an array, create a function which filters array based on a search query.

// Examples

// const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
// console.log(filterItems(friends, 'ka')); // ["Rika"];
// console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
function filterItems(array,term){
    return array.filter(x=> x.search(term)!== -1)
}
console.log(filterItems(friends, 'ka'))
console.log(filterItems(friends, 'e'))
console.log("________________________")
// 5. Sum Up
// Write a function called sum that uses the reduce method to sum up an array of numbers.

// Examples:

// sum([1,2,3,4,5]); //returns 15
// sum([6,7,7]); //returns 20


function sum(array){
    return array.reduce(function (acc,current){
        return acc+current
        },first)
}
console.log(sum([1,2,3,4,5]))
console.log(sum([6,7,7]))

console.log("________________________")
// 6. Square Root
// Given an array of numbers, find the square root of each element in the array.

const random_numbers=[25,44,231,1244,9,5684,23167,21,4673,214,16]
console.log(
    random_numbers.map(x=>Math.sqrt(x))
)