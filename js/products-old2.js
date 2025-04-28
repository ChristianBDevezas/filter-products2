import products from "./products-data.js";

// get value in localStorage
const elementId = localStorage.getItem("idItem");
console.log(elementId);

// get DOM elements
const body = document.body;
const title = document.querySelector(".main-title");
const container = document.querySelector(".container");
const productsWrapper = document.querySelector(".products-wrapper");

// map method
// const productsContainer = products.map((product) => {
//     return `
//         <div class="item">
//             <div>
//                 <img src="${product.url}" alt="Sony Playstation 5">
//                 <span class="remove">Remove Item</span>
//             </div>
                  
//             <p>${product.name}</p>
//             <strong>${product.price}</strong>
//         </div>
//     `
// });

// productsWrapper.innerHTML = productsContainer.join("");

// for of loop
// for(const product of products) {
//     productsWrapper.innerHTML += `
//         <div class="item">
//             <div>
//                 <img src="${product.url}" alt="Sony Playstation 5">
//                 <span class="remove">Remove Item</span>
//             </div>
                  
//             <p>${product.name}</p>
//             <strong>${product.price}</strong>
//         </div>
//     `;
// }

// forEach loop
products.forEach((product) => {
    const productElement = document.createElement('div');
    productElement.className = 'item';

    const div = document.createElement("div");

    const img = document.createElement("img");
    img.src = `${product.url}`;
    img.setAttribute("alt", `${product.name}`);

    const span = document.createElement("span");
    span.classList.add("status");
    span.innerText = `Add To Cart`;
    span.setAttribute("id", product.id);
    // productElement.querySelector('.status').addEventListener('click', addToCart);
    // span.addEventListener('click', addToCart);

    const p = document.createElement("p");
    p.innerText = `${product.name}`;

    const strong = document.createElement("strong");
    strong.innerText = `${product.price.toLocaleString()}`;

    div.appendChild(img);
    div.appendChild(span);

    productElement.appendChild(div);
    productElement.appendChild(p);
    productElement.appendChild(strong);

    productsWrapper.appendChild(productElement);
});

// check if there is no selected items
const items = document.querySelectorAll(".item");
console.log(items);

if(items.length == 0 || items == null) {
    title.innerHTML = "No item has been selected!";
}