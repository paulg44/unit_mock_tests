// Function for fetching data

async function fetchAllShopItems() {
  const shopItemsResponse = await fetch(`/api/shop`).then(
    (shopItemsResponse) => {
      return shopItemsResponse.json();
    }
  );
  const items = shopItemsResponse.map((item) => item);
  const shopContainer = document.querySelector(".shop-container");
  shopContainer.innerHTML = `<p>${items}</p>`;
}

fetchAllShopItems();
console.log(fetchAllShopItems());
