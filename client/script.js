// Function for fetching data
async function fetchAllShopItems() {
  const shopItemsResponse = await fetch(`../server/shopData.json`).then(
    (shopItemsResponse) => {
      return shopItemsResponse.json();
    }
  );
  const items = shopItemsResponse.map((item) => item.item);
  const shopContainer = document.querySelector(".shop-container");
  shopContainer.innerHTML = `<p>${items}</p>`;
}

fetchAllShopItems();
