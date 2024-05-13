// import dotenv from "dotenv";
// dotenv.config();

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
const itemList = document.querySelector(".shop-item-list");

function displayShopItems(data) {
  console.log(data);

  data.forEach((item) => {
    const itemCard = document.createElement("li");
    const addToCartBtn = document.createElement("button");
    addToCartBtn.classList = "add-to-cart-btn";
    addToCartBtn.innerText = "Add to cart";

    addToCartBtn.addEventListener("click", () => {
      console.log("add to cart btn clicked", item.item);
      cartItemArr.push(item);
      addToCart(item);
    });

    itemCard.innerHTML = `
    <div id="${item.id}" class="item-title-image">
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

/* Next steps 
- have an empty variable at 0 for each item
- add item to cart add 1 to "count"
- if an item already exists in cart
- add to "count"
- have a price variable that adds the total of each item
- have another price variable that adds the total of the basket

- add remove button and do the same but in reverse
*/

//
const cartItemArr = [];

function addToCart(item) {
  console.log(item);
  console.log(cartItemArr);

  const cartList = document.getElementById("cart-item");
  const cartListItem = document.createElement("li");
  const quantityP = document.createElement("p");
  const removeBtn = document.createElement("button");
  const addBtn = document.createElement("button");
  const minusBtn = document.createElement("button");

  removeBtn.classList = "remove-from-cart-btn";
  removeBtn.innerText = "Remove from cart";
  addBtn.classList = "add-btn";
  addBtn.innerText = "+";
  minusBtn.classList = "minus-btn";
  minusBtn.innerText = "-";

  removeBtn.addEventListener("click", () => {
    console.log("remove btn clicked");
    cartList.removeChild(cartListItem);
    cartList.removeChild(removeBtn);
    cartList.removeChild(addBtn);
    cartList.removeChild(minusBtn);
    cartList.removeChild(quantityP);

    updateTotal(item, false);
  });

  let quantity = 1;

  addBtn.addEventListener("click", () => {
    console.log("add btn clicked");
    quantity++;
    quantityP.innerHTML = quantity;
    updateTotal(item);
  });

  minusBtn.addEventListener("click", () => {
    console.log("minus btn clicked");
    quantity--;
    quantityP.innerHTML = quantity;
    updateTotal(item, false);
  });

  cartListItem.innerHTML = `
      <div id="${item.id}" class="cart-item">
      <p>${item.item}</p>
      </div>
      <div class="description-price">
      <p>£${item.price}</p>
      <p>${item.description}</p>
      </div>`;

  cartList.appendChild(cartListItem);
  cartList.appendChild(quantityP);
  cartList.appendChild(removeBtn);
  cartList.appendChild(addBtn);
  cartList.appendChild(minusBtn);
  // });

  updateTotal(item);
}
// Functions I believe I need to make this more readable and useable
function removeItem() {}
function incrementQuantity() {}
function decrementQuantity() {}
function displayCartItems() {}

let totalPriceArr = [];

function updateTotal(cartItemArr, isAddition = true) {
  if (isAddition) {
    totalPriceArr.push(cartItemArr.price);
  } else {
    totalPriceArr = totalPriceArr.filter(
      (price) => price !== cartItemArr.price
    );
  }
  console.log(totalPriceArr);
  const numberArray = totalPriceArr.map(parseFloat);

  console.log(numberArray);

  const totalPrice = document.getElementById("total");
  const totalPriceSum = numberArray.reduce((acc, curr) => acc + curr, 0);

  totalPrice.innerText = `Cart Total: £${totalPriceSum.toFixed(2)}`;
}

fetchAllShopItems();

module.exports = updateTotal;
