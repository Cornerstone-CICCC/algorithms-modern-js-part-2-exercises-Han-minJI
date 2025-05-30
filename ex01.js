// Sort Exercise
// Instructions: Create an array of at least five numbers in random order. Write the code to sort this array in ascending order.

const nums = [5, 1, 24, 13, 8, 19]

const sortAscending = (a, b) => a > b ? 1 : -1
console.log(nums.sort(sortAscending))