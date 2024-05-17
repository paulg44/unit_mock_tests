// Test function to test tests
function sum(a, b) {
  return a + b;
}
let testArr = [1, 2, 3, 4, 5];

// Sum up all items in array
let totalArr = [9.99, 12.99];

function arrayTotal(array) {
  return array.reduce((acc, curr) => acc + curr, 0);
}
console.log(arrayTotal(totalArr));

// Add an item to array
function addToArray(array, item) {
  return array.push(item);
}
// console.log(addToArray(testArr, 1), ...testArr);

// Remove item from array
function removeFromArray(array, item) {
  const index = array.indexOf(item);
  return array.splice(index, 1);
}
// console.log(removeFromArray(testArr, 2), ...testArr);

// Filter items in array
function filterArray(array, filtered) {
  return array.filter((num) => num < filtered);
}

// console.log(filterArray(testArr, 3), ...testArr);

// Covert string case
let testString = "TEST STRING";

function convertString(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      return str.toUpperCase();
    } else if (str[i] >= "A" && str[i] <= "Z") {
      return str.toLowerCase();
    }
  }
}

// console.log(convertString(testString));

// Find Remainder
function findRemainder(num1, num2) {
  return num1 % num2;
}

// console.log(findRemainder(20, 6));

// Find Largest
function findLargest(arr) {
  return Math.max(...arr);
}

// console.log(findLargest(testArr));

// Find Smallest
function findSmallest(arr) {
  return Math.min(...arr);
}

// console.log(findSmallest(testArr));

// Test input value is as expected
function testInputValue(inputElement, targetValue) {
  return inputElement.value === targetValue;
}

module.exports = {
  sum,
  arrayTotal,
  addToArray,
  removeFromArray,
  filterArray,
  convertString,
  findRemainder,
  findLargest,
  findSmallest,
  testInputValue,
};
// module.exports.arrayTotal = arrayTotal;
