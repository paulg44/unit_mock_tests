// Function for fetching data
const shopItemsResponse = fetch("/api/shop").then((shopItemsResponse) => {
  return shopItemsResponse.json();
});
console.log(shopItemsResponse);
