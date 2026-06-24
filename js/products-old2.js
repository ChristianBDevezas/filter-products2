import products from "./products-data.js";

// get value in localStorage
const elementId = localStorage.getItem("idItem");
console.log(elementId);

// get DOM elements
const title = document.querySelector(".main-title");
const productsWrapper = document.querySelector(".products-wrapper");

// // map method
// const productsContainer = products.map((product) => {
//     return `
//         <article class="item">
//             <div class="item-img">
//               <img src="${product.url}" alt="${product.name}">
//               <span class="remove">Remove Product</span>
//             </div>
            
//             <div class="item-description">
//               <p>${product.name}</p>
//               <strong>${product.price}</strong>
//             </div>

//             <div class="item-sub-add">
//               <i class="fa-solid fa-minus"></i>
//               <i class="fa-solid fa-plus"></i>
//             </div>
//         </article>
//     `
// });

// productsWrapper.innerHTML = productsContainer.join("");

// // for of loop
// for(const product of products) {
//     productsWrapper.innerHTML += `
//         <article class="item">
//             <div class="item-img">
//               <img src="${product.url}" alt="${product.name}">
//               <span class="remove">Remove Product</span>
//             </div>
            
//             <div class="item-description">
//               <p>${product.name}</p>
//               <strong>${product.price}</strong>
//             </div>

//             <div class="item-sub-add">
//               <i class="fa-solid fa-minus"></i>
//               <i class="fa-solid fa-plus"></i>
//             </div>
//         </article>
//     `;
// }

// forEach loop
products.forEach((product) => {
    const productElement = document.createElement('article');
    productElement.className = 'item';

    const div1 = document.createElement("div");
    div1.classList.add("item-img");

    const img = document.createElement("img");
    img.src = `${product.url}`;
    img.setAttribute("alt", `${product.name}`);

    const span = document.createElement("span");
    span.classList.add("remove");
    span.innerText = `Remove Product`;
    // span.addEventListener('click', addToCart);

    div1.appendChild(img);
    div1.appendChild(span);

    const div2 = document.createElement("div");
    div2.classList.add("item-description");

    const p = document.createElement("p");
    p.innerText = `${product.name}`;

    const strong = document.createElement("strong");
    strong.innerText = `${product.price}`;
    // strong.innerText = `${product.price.toLocaleString()}`;

    div2.appendChild(p);
    div2.appendChild(strong);

    const div3 = document.createElement("div");
    div3.classList.add("item-sub-add");

    const icon1 = document.createElement("i");
    icon1.classList.add("fa-solid", "fa-minus");

    const icon2 = document.createElement("i");
    icon2.classList.add("fa-solid", "fa-plus");

    div3.appendChild(icon1);
    div3.appendChild(icon2);

    productElement.appendChild(div1);
    productElement.appendChild(div2);
    productElement.appendChild(div3);

    productsWrapper.appendChild(productElement);
});

// check if there is no selected items
const items = document.querySelectorAll(".item");
console.log(items);

if(items.length == 0 || items == null) {
    title.innerHTML = "No item has been selected!";
}