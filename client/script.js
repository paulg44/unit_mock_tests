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
  const itemList = document.querySelector(".shop-item-list");

  data.forEach((item, index) => {
    const itemCard = document.createElement("li");
    const addToCartBtn = document.createElement("button");
    addToCartBtn.classList = "add-to-cart-btn";
    addToCartBtn.innerText = "Add to cart";

    addToCartBtn.addEventListener("click", () => {
      console.log("add to cart btn clicked", item.item);
      addToCart(item);
    });

    itemCard.innerHTML = `
    <div id="${index}" class="item-title-image">
    <p>${item.item}</p>
    </div>
    <div class="description-price">
    <p>£${item.price}</p>
    <p>${item.description}</p>
    </div>`;

    itemList.appendChild(itemCard);
    itemList.appendChild(addToCartBtn);
  });
}

function addToCart(item) {
  console.log(item);

  const cartList = document.getElementById("cart-item");
  cartList.innerHTML = item;
}

fetchAllShopItems();
