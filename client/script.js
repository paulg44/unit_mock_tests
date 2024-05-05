// Function for fetching data
const dev = "http://localhost:5030/api/shop";
const deploy = "https://unit-mock-tests.onrender.com/api/shop";

async function fetchAllShopItems() {
  const shopItemsResponse = await fetch(`${dev}`).then((shopItemsResponse) => {
    return shopItemsResponse.json();
  });
  console.log(shopItemsResponse);
  const items = shopItemsResponse.map((item) => item.item);
  const price = shopItemsResponse.map((price) => price.price);
  const shopContainer = document.querySelector(".shop-container");
  shopContainer.innerHTML = `<div>
  <p>${items}</p>
  <p>£${price}</p>
  <div>`;
}

fetchAllShopItems();
