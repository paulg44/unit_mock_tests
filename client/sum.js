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
let addArr = ["trousers", "skirt"];

function addToArray(array, item) {
  return array.push(item);
}
console.log(addToArray(addArr, 1), ...addArr);

module.exports = { sum, arrayTotal, addToArray };
// module.exports.arrayTotal = arrayTotal;
