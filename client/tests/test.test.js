// Test file for tests
const sum = require("../sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("add 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("add 2 + 3 to equal 5", () => {
  expect(sum(2, 3)).toBe(5);
});
