/**
 * @jest-environment jsdom
 */

// test("use jsdom in this test file", () => {
//   const element = document.createElement("div");
//   expect(element).not.toBeNull();
// });

// /* Test List
//     - Test item can be added to cart
//     - Test quantity can be increased and decreased
//     - Test total price works as expected
//     - Test fetch function works correctly
// */

// // Imports
// const updateTotal = require("../script");

// describe("update total", () => {
//   let totalPriceArr;

//   beforeEach(() => {
//     totalPriceArr = [];
//   });

//   it("should add price of item to total", () => {
//     const item = {
//       id: 1,
//       item: "Test Item",
//       price: 9.99,
//       description: "Test",
//     };
//     updateTotal(item);
//     expect(totalPriceArr).toEqual([9.99]);
//   });
// });
