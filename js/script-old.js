const products = [
  {
    url: 'images/playstation_5.png',
    name: 'Sony Playstation 5',
    type: 'games',
    price: 499.99,
  },
  {
    url: 'images/samsung_galaxy.png',
    name: 'Samsung Galaxy',
    type: 'smartphones',
    price: 399.99,
  },
  {
    url: 'images/cannon_eos_camera.png',
    name: 'Cannon EOS Camera',
    type: 'cameras',
    price: 749.99,
  },
  {
    url: 'images/sony_a7_camera.png',
    name: 'Sony A7 Camera',
    type: 'cameras',
    price: 1999.99,
  },
  {
    url: 'images/lg_tv.png',
    name: 'LG TV',
    type: 'televisions',
    price: 799.99,
  },
  {
    url: 'images/nintendo_switch.png',
    name: 'Nintendo Switch',
    type: 'games',
    price: 299.99,
  },
  {
    url: 'images/xbox_series_x.png',
    name: 'Xbox Series X',
    type: 'games',
    price: 499.99,
  },
  {
    url: 'images/samsung_tv.png',
    name: 'Samsung TV',
    type: 'televisions',
    price: 1099.99,
  },
  {
    url: 'images/google_pixel.png',
    name: 'Google Pixel',
    type: 'smartphones',
    price: 499.99,
  },
  {
    url: 'images/sony_zv1f_camera.png',
    name: 'Sony ZV1F Camera',
    type: 'cameras',
    price: 799.99,
  },
  {
    url: 'images/toshiba_tv.png',
    name: 'Toshiba TV',
    type: 'televisions',
    price: 499.99,
  },
  {
    url: 'images/iphone_14.png',
    name: 'iPhone 14',
    type: 'smartphones',
    price: 999.99,
  },
];

// Get DOM elements
const searchInput = document.getElementById('search');
// const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');
const filtersContainer = document.getElementById('filters-container');
const checkElements = document.querySelectorAll('.check');
const productsWrapper = document.querySelector('.products-wrapper');

// Initialize cart item count
let cartItemCount = 0;

// Initialize products (empty array)
const productsElements = [];

// for(let product of products) {}

products.forEach((product) => {
  const productElement = document.createElement('div');
  productElement.className = 'item';

  // productElement.innerHTML = `
  //   <div>
  //      <img src="${product.url}" alt="${product.name}" />
  //      <span class="status">Add To Cart</span>
  //   </div>
  //   <p>${product.name}</p>
  //   <strong>$${product.price.toLocaleString()}</strong>
  // `;

  const div = document.createElement("div");

  const img = document.createElement("img");
  img.src = `${product.url}`;
  // img.setAttribute("src", `${product.url}`);
  img.setAttribute("alt", `${product.name}`);

  const span = document.createElement("span");
  span.classList.add("status");
  span.innerText = `Add To Cart`;

  const p = document.createElement("p");
  p.innerText = `${product.name}`;

  const strong = document.createElement("strong");
  strong.innerText = `${product.price.toLocaleString()}`;

  div.appendChild(img);
  div.appendChild(span);

  productElement.appendChild(div);
  productElement.appendChild(p);
  productElement.appendChild(strong);

  productElement.querySelector('.status').addEventListener('click', addToCart);

  productsWrapper.appendChild(productElement);

  productsElements.push(productElement);
});

// Loop over the products and create the product elements
// products.forEach((product) => {
//   const productElement = createProductElement(product);
//   productsElements.push(productElement);
//   productsWrapper.appendChild(productElement);
// });

// // Create product element
// function createProductElement(product) {
//   const productElement = document.createElement('div');
//   productElement.className = 'item';

//   // productElement.innerHTML = `
//   //   <div>
//   //      <img src="${product.url}" alt="${product.name}" />
//   //      <span class="status">Add To Cart</span>
//   //   </div>
//   //   <p>${product.name}</p>
//   //   <strong>$${product.price.toLocaleString()}</strong>
//   // `;

//   const div = document.createElement("div");

//   const img = document.createElement("img");
//   img.src = `${product.url}`;
//   // img.setAttribute("src", `${product.url}`);
//   img.setAttribute("alt", `${product.name}`);

//   const span = document.createElement("span");
//   span.classList.add("status");
//   span.innerText = `Add To Cart`;

//   const p = document.createElement("p");
//   p.innerText = `${product.name}`;

//   const strong = document.createElement("strong");
//   strong.innerText = `${product.price.toLocaleString()}`;

//   div.appendChild(img);
//   div.appendChild(span);

//   productElement.appendChild(div);
//   productElement.appendChild(p);
//   productElement.appendChild(strong);

//   productElement.querySelector('.status').addEventListener('click', addToCart);

//   return productElement;
// }

// Toggle add/remove from cart
function addToCart(e) {
  const statusElement = e.target;

  if(statusElement.classList.contains('added')) {
    // Remove from cart
    statusElement.classList.remove('added');
    statusElement.innerText = 'Add To Cart';
    cartItemCount--;
  }
  else {
    // Add to cart
    statusElement.classList.add('added');
    statusElement.innerText = 'Remove From Cart';
    cartItemCount++;
  }

  // Update cart item count
  cartCount.innerText = cartItemCount.toString();
}

// Add filter event listeners (with event delegation)
filtersContainer.addEventListener('change', filterProducts);
searchInput.addEventListener('input', filterProducts);

// Filter products by search field or selecting checkbox
function filterProducts() {
  // Get search term
  const searchTerm = searchInput.value.trim().toLowerCase();
  // Get checked categories
  const checkedCategories = Array.from(checkElements).filter((check) => check.checked).map((check) => check.id);
  console.log(checkedCategories);
  
  // Loop over products and check for matches
  productsElements.forEach((productElement, index) => {
    const product = products[index];
    // console.log(product);

    // Check to see if product matches the search or checked items
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm);
    // console.log(matchesSearchTerm);
    const isInCheckedCategory = checkedCategories.length === 0 || checkedCategories.includes(product.type);
    // console.log(isInCheckedCategory);

    // Show or hide product based on matches
    if(matchesSearchTerm && isInCheckedCategory) {
      productElement.classList.remove('hidden');
    }
    else {
      productElement.classList.add('hidden');
    }
  });
}

// change color of labels
const filtersContainerInputs = document.querySelectorAll('#filters-container input');
const filtersContainerLabels = document.querySelectorAll('#filters-container label');

filtersContainerInputs.forEach((input, index) => {
  input.addEventListener('click', () => {
    console.log(input.checked);
    if(input.checked) {
      filtersContainerLabels[index].classList.add('color');
    }
    else {
      filtersContainerLabels[index].classList.remove('color');
    }
    // if(!filtersContainerLabels[index].classList.contains('color')) {
    //   filtersContainerLabels[index].classList.add('color');
    // }
    // else {
    //   filtersContainerLabels[index].classList.remove('color');
    // }
  });
});