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

function addToCart(item, numberArray) {
  console.log(item);
  const cartList = document.getElementById("cart-item");

  const cartListItem = document.createElement("li");
  const quantityP = document.createElement("p");

  const removeBtn = document.createElement("button");
  removeBtn.classList = "remove-from-cart-btn";
  removeBtn.innerText = "Remove from cart";

  removeBtn.addEventListener("click", () => {
    console.log("remove btn clicked");
    cartList.removeChild(cartListItem);
    cartList.removeChild(removeBtn);
    cartList.removeChild(addBtn);
    cartList.removeChild(minusBtn);
    cartList.removeChild(quantityP);

    updateTotal(item, false);
  });

  const addBtn = document.createElement("button");
  addBtn.classList = "add-btn";
  addBtn.innerText = "+";

  let quantity = 1;

  addBtn.addEventListener("click", () => {
    console.log("add btn clicked");
    quantity++;
    quantityP.innerHTML = quantity;
    updateTotal(item);
  });

  const minusBtn = document.createElement("button");
  minusBtn.classList = "minus-btn";
  minusBtn.innerText = "-";

  minusBtn.addEventListener("click", () => {
    console.log("minus btn clicked");
    quantity--;
    quantityP.innerHTML = quantity;
    updateTotal(item, false);
  });

  cartListItem.innerHTML = `
    <div class="cart-item">
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

  updateTotal(item);
}

let totalPriceArr = [];

function updateTotal(item, isAddition = true) {
  if (isAddition) {
    totalPriceArr.push(item.price);
  } else {
    // Current issues. If I have a two elements that are the same, 3.99 for example. It will remove both from the total
    // totalPriceArr = totalPriceArr.filter((price) => price !== item.price);
    let found = false;
    for (let i = 0; i < totalPriceArr.length; i++) {
      if (!found && totalPriceArr[i] === item.price) {
        totalPriceArr.splice(i, 1);
        found = true;
      }
    }
  }
  console.log(totalPriceArr);
  const numberArray = totalPriceArr.map(parseFloat);

  console.log(numberArray);

  const totalPrice = document.getElementById("total");
  const totalPriceSum = numberArray.reduce((acc, curr) => acc + curr, 0);

  totalPrice.innerText = `£${totalPriceSum.toFixed(2)}`;
}

fetchAllShopItems();
