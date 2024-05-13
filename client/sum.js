// Test function to test tests
function sum(a, b) {
  return a + b;
}

// let totalArr = [9.99, 12.99];

function arrayTotal(array) {
  return array.reduce((acc, curr) => acc + curr, 0);
}

// console.log(arrayTotal(totalArr));

module.exports = { sum, arrayTotal };
// module.exports.arrayTotal = arrayTotal;
