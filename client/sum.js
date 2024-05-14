// Test function to test tests
function sum(a, b) {
  return a + b;
}

// Sum up all items in array
let totalArr = [9.99, 12.99];

function arrayTotal(array) {
  return array.reduce((acc, curr) => acc + curr, 0);
}
console.log(arrayTotal(totalArr));

// Add an item to array
let testArr = [1, 2, 3, 4, 5];

function addToArray(array, item) {
  return array.push(item);
}
// console.log(addToArray(testArr, 1), ...testArr);

// Remove item from array
function removeFromArray(array, item) {
  const index = array.indexOf(item);
  return array.splice(index, 1);
}
console.log(removeFromArray(testArr, 2), ...testArr);

module.exports = { sum, arrayTotal, addToArray, removeFromArray };
// module.exports.arrayTotal = arrayTotal;
