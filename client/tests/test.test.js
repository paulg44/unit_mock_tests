// Test file for writing tests before writing basic code functions
/* Test List 
     - Jest basic tests
     - All items in an array add up (shopping cart)
     - Element can be removed from array 
     - Element can be added to array (toContain)
     - Add object to array
     - Throw error?
     - An input value can be changed
     - 
*/
const { sum, arrayTotal, addToArray } = require("../sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("add 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("add 2 + 3 to equal 5", () => {
  expect(sum(2, 3)).toBe(5);
});

// Test array total
test("all elements in array correctly add up to total", () => {
  let array = [9.99, 20];
  // Need the too be close to because of the decimals in JS
  expect(arrayTotal(array)).toBeCloseTo(29.99);
});

// Add an element to array
test("add element to array", async () => {
  let arr = ["shorts", "jeans"];
  let item = "shirt";
  await addToArray(arr, item);
  expect(arr).toContain(item);
});
