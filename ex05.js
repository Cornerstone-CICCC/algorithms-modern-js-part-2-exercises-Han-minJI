// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

const nums = [5, 1, 24, 13, 8, 19]
const isThereNums = nums.some(num => num % 2 === 0)
console.log(isThereNums)