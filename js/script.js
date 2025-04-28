import products from "./products-data.js";
import {setItemIdToLocalStorage, setItemPriceToLocalStorage, setCounterToLocalStorage, convertCurrencyValueToDisplay} from "./settings.js";

// Get DOM elements
const searchInput = document.getElementById('search');
const filtersContainer = document.getElementById('filters-container');
const checkElements = document.querySelectorAll('.check');
const productsWrapper = document.querySelector('.products-wrapper');

// Initialize products (empty array)
const productsElements = [];

// Loop over the products and create the product elements
// products.forEach((product) => { });
for(const product of products) {
  const productElement = createProductElement(product);
  productsElements.push(productElement);
  productsWrapper.appendChild(productElement);
}

// Create product element
function createProductElement(product) {
  const productElement = document.createElement('article');
  productElement.className = 'item';

  // productElement.innerHTML = `
  //   <div>
  //      <img src="${product.url}" alt="${product.name}" />
  //      <span class="select-item">Add To Cart</span>
  //   </div>
  //   <p>${product.name}</p>
  //   <strong>$${product.price.toLocaleString()}</strong>
  // `;

  const div1 = document.createElement("div");
  div1.classList.add("item-img");

  const img = document.createElement("img");
  img.src = `${product.url}`;
  img.setAttribute("alt", `${product.name}`);

  const span = document.createElement("span");
  span.classList.add("select-item");
  span.innerText = "Add Product";
  span.setAttribute("id", product.id);

  span.addEventListener('click', selectItem);

  div1.appendChild(img);
  div1.appendChild(span);

  const div2 = document.createElement("div");
  div2.classList.add("item-description");

  const p = document.createElement("p");
  p.innerText = `${product.name}`;

  const strong = document.createElement("strong");
  // strong.innerText = `${product.price.toLocaleString()}`;
  strong.innerText = `${convertCurrencyValueToDisplay(product.price)}`;

  div2.appendChild(p);
  div2.appendChild(strong);

  productElement.appendChild(div1);
  productElement.appendChild(div2);

  return productElement;
}

// Add filter event listeners (using event delegation for filtersContainer)
filtersContainer.addEventListener('change', filterProducts);
searchInput.addEventListener('input', filterProducts);

// Filter products by search field or selecting checkbox
function filterProducts() {
  // Get search term
  const searchTerm = searchInput.value.trim().toLowerCase();
  
  // Get checked categories
  // const checkedCategories = Array.from(checkElements).filter((check) => check.checked).map((check) => check.id);
  const checkedCategories = Array.from(checkElements).filter((check) => check.checked);
  console.log(checkedCategories);

  const checkedCategoriesId = checkedCategories.map((check) => check.id);
  console.log(checkedCategoriesId);
  
  // Loop over products and check for matches
  productsElements.forEach((productElement, index) => {
    const product = products[index];

    // Check if product matches the search or checked items
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm);
    // console.log(matchesSearchTerm);
    
    // const isInCheckedCategory = checkedCategories.length === 0 || checkedCategories.includes(product.type);
    const isInCheckedCategory = checkedCategoriesId.length === 0 || checkedCategoriesId.includes(product.type);
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
  });
});

/* Link-top */
window.addEventListener('scroll', () => {
  const topLink = document.querySelector(".link-top");
  const scrollHeight = window.scrollY;

  if(scrollHeight > 350) {
    topLink.classList.add('show');
  }
  else {
    topLink.classList.remove('show');
  }
});

// Select cart
function selectItem(e) {
  const spanElement = e.target;

  // Get id of selected item and set it to localStorage
  const idElement = spanElement.id;
  console.log(idElement);

  const parentSpanElement = spanElement.parentElement;
  let preparedPriceValue = parentSpanElement.nextElementSibling.firstChild.nextElementSibling.innerText??"0";

  preparedPriceValue = preparedPriceValue.replace(".", "").replace(",", ".");

  const priceElement = parseFloat(preparedPriceValue);
  console.log(priceElement, typeof(priceElement), preparedPriceValue);

  setItemIdToLocalStorage(idElement);
  setItemPriceToLocalStorage(priceElement);
  setCounterToLocalStorage(1);

  window.location.href = "products.html?add=1";
}