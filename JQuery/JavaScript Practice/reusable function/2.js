//call 1.js file function
// fn1();

// import the variables and function from 1.js
import { message, number, multiplyNumbers } from './1.js';

console.log(message); // hello world
console.log(number); // 10

console.log(multiplyNumbers(3, 4)); // 12
console.log(multiplyNumbers(5, 8)); // 40