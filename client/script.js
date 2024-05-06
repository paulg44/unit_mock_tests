// Function for fetching data
const dev = "http://localhost:5030/api/shop";
const deploy = "https://unit-mock-tests.onrender.com/api/shop";

async function fetchAllShopItems() {
  try {
    const shopItemsResponse = await fetch(`${dev}`);

    const shopItemsData = await shopItemsResponse.json();

    // Call function so I can use data outside of fetch
    displayShopItems(shopItemsData);
    console.log(shopItemsResponse);
  } catch (error) {
    console.error("Error fetching shop items", error);
  }
}

const cartItem = document.getElementById("cart-item");
const itemCard = document.querySelector(".shop-item-card");

function displayShopItems(data) {
  console.log(data);
  const items = data.map((item) => item.item);
  const price = data.map((price) => price.price);
  const description = data.map((description) => description.description);
  const itemList = document.querySelector(".shop-item-list");

  items.forEach((item, index) => {
    const itemCard = document.createElement("li");
    const addToCartBtn = document.createElement("button");
    itemCard.innerHTML = `
    <div id="${index}" class="item-title-image">
    <p>${item}</p>
    </div>
    <div class="description-price">
    <p>£${price[index]}</p>
    <p>${description[index]}</p>
    </div>
    `;

    itemList.appendChild(itemCard);
    itemList.appendChild(addToCartBtn).innerHTML = "Add to cart";
  });
}

fetchAllShopItems();

addToCartBtn.addEventListener("click", () => {
  console.log("cart btn clicked");
  cartItem.innerHTML = itemCard;
});
