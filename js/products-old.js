import products from "./products-data.js";
import {getItemIdFromLocalStorage, getItemPriceFromLocalStorage, getCounterFromLocalStorage, removeIdItemFromLocalStorage, removeCounterFromLocalStorage, removeItemPriceFromLocalStorage, removeCartFromLocalStorage, convertCurrencyValueToDisplay} from "./settings.js";

// get id from localStorage
// const elementId = (localStorage.getItem("idItem"));
const elementId = getItemIdFromLocalStorage();
console.log(elementId, typeof(elementId));

// convert id obtained from localStorage to number type
const selectedElementId = +(elementId);
console.log(selectedElementId, typeof(selectedElementId));

// get price from localStorage
const elementPrice = getItemPriceFromLocalStorage();
console.log(elementPrice, typeof(elementPrice));

// convert price obtained from localStorage to number type
const numberElementPrice = parseFloat(elementPrice);
console.log(numberElementPrice, typeof(numberElementPrice));

// get DOM elements
const body = document.body;
const quantity = document.querySelector(".quantity");
const totalValue = document.querySelector(".total-value");
const title = document.querySelector(".main-title");
const productsWrapper = document.querySelector(".products-wrapper");

// let checkItemCounter = localStorage.getItem("checkCounter");
let checkItemCounter = getCounterFromLocalStorage();
console.log(checkItemCounter, typeof(checkItemCounter));

if(checkItemCounter !=null) {
    checkItemCounter = +(checkItemCounter);
}
console.log(checkItemCounter, typeof(checkItemCounter));

// check if some product is selected
if(elementId == null) {
    title.innerHTML = "None card is selected!";
    productsWrapper.style.display = "none";
}

const article = document.createElement('article');
article.className = 'item';

function createCard() {
    // get current item and loop through products array
    let currentItem;

    for(const product of products) {
        if(product.id == selectedElementId) {
            currentItem = product;
        }
    }

    // first div
    const div1 = document.createElement("div");
    div1.classList.add("item-img");

    const img = document.createElement("img");
    img.src = `${currentItem.url}`;
    img.setAttribute("alt", `${currentItem.name}`);

    const span = document.createElement("span");
    span.classList.add("remove");
    span.innerText = `Remove Product`;
    span.setAttribute("id", currentItem.id);
    span.addEventListener("click", removeCard);

    div1.appendChild(img);
    div1.appendChild(span);

    // second div
    const div2 = document.createElement("div");
    div2.classList.add("item-description");

    const itemModel = document.createElement("p");
    itemModel.innerText = `${currentItem.name}`;

    const itemPrice = document.createElement("strong");
    // itemPrice.innerText = `US$ ${currentItem.price.toLocaleString()}`;
    itemPrice.innerText = `US$ ${convertCurrencyValueToDisplay(currentItem.price)}`;

    div2.appendChild(itemModel);
    div2.appendChild(itemPrice);

    // third div
    const div3 = document.createElement("div");
    div3.classList.add("item-sub-add");

    const subtractButton = document.createElement("i");
    subtractButton.classList.add("fa-solid", "fa-minus");
    subtractButton.addEventListener("click", subtractItem);

    const addButton = document.createElement("i");
    addButton.classList.add("fa-solid", "fa-plus");
    addButton.addEventListener("click", addProduct);

    div3.appendChild(subtractButton);
    div3.appendChild(addButton);

    article.appendChild(div1);
    article.appendChild(div2);
    article.appendChild(div3);

    console.log("checkItemCounter", checkItemCounter);

    calcCart();

    return article;
}

// check if cart variable exists in loacalStorage
const localStorageCart = localStorage.getItem("cart");
let cart;

if(localStorageCart) {
    cart = JSON.parse(localStorageCart);
}
else {
    cart = {
        products: [],
        total: 0
    };
}

console.log('location.search', location.search);
if(location.search === "?add=1") {
    addProduct();
}

function subtractItem() {
     // Search for product index in the list (array)
     let index = null;

     for(let i = 0; i < cart.products.length; i++) {
         const product = cart.products[i];

         if(product._id === selectedElementId) {
            index = i;
        }
     }
     
     console.log('index', index);

    if(cart.products.length > 1) {
        // Remove item from array
        cart.products.splice(index, 1);
    }
 
     // Show updated values
     calcCart();
}

function addProduct() {
    console.log('add product', selectedElementId, numberElementPrice)

    // Add product to cart
    cart.products.push({
        id: selectedElementId,
        price: numberElementPrice,
    });

    calcCart();
}

function calcCart() {
    // Calculate total and store in cart
    let addedProductPrice = 0;
    let productQuantity = 0;

    for(let product  of cart.products) {
        if(product.id === selectedElementId) {
            addedProductPrice += product.price;
            productQuantity++;
            console.log("Product", product);
        }
    }

    cart.total = addedProductPrice;

    console.log("Price and Quantity", addedProductPrice, productQuantity);
    
    // Update changes made in cart in localStorage (JSON.stringify)
    localStorage.setItem("cart", JSON.stringify(cart));

    // Show total quantity of items
    quantity.innerText = productQuantity;

    // totalValue.innerText = addedProductPrice.toFixed(2);

    // let preparedTotalValue = addedProductPrice.toFixed(2)??0;
    // totalValue.innerText = preparedTotalValue;

    // let preparedTotalValueText = `${preparedTotalValue}`.replace(",", "").replace(".", ",");
    // totalValue.innerText = preparedTotalValueText;

    // to use the "convertCurrencyValueToDisplay" funtion, the "addedProductPrice" variable must be a number type
    totalValue.innerText = convertCurrencyValueToDisplay(+addedProductPrice.toFixed(2));
};

productsWrapper.appendChild(createCard());

function removeCard() {
    subtractItem();

    article.remove();

    // localStorage.removeItem("idItem");
    removeIdItemFromLocalStorage();

    // localStorage.removeItem("checkCounter");
    removeCounterFromLocalStorage();

    // localStorage.removeItem("priceItem");
    removeItemPriceFromLocalStorage();

    // localStorage.removeItem("cart");
    removeCartFromLocalStorage();

    window.location = "./index.html";
}