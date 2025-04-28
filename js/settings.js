// export function createCartOfSelectedProduct() {
//     let cartItems = localStorage.getItem("cartItems");
//     if(cartItems === null) {
//         localStorage.setItem("cartItems", "{}");
//     }
// }

// export function getCartOfSelectedProduct() {
//     createCartOfSelectedProduct();
//     let cartItems = localStorage.getItem("cartItems");

//     return JSON.parse(cartItems);
//     // return {}
//     // return {1: {id: 1, quant: 3}}
// }

// export function updateQuantityOfSelectedProduct(id, quant) {
//     let cartItems = getCartOfSelectedProduct();

//     if(cartItems[id] === undefined) {
//         cartItems[id] = {id:id, quant:0};
//     }
// }

export function setItemIdToLocalStorage(idValue) {
    return localStorage.setItem("idItem", idValue);
}

export function setItemPriceToLocalStorage(priceValue) {
    return localStorage.setItem("priceItem", priceValue);
}

export function setCounterToLocalStorage(count) {
    return localStorage.setItem("checkCounter", count);
}

export function getItemIdFromLocalStorage() {
    return localStorage.getItem("idItem");
}

export function getItemPriceFromLocalStorage() {
    return localStorage.getItem("priceItem");
}

export function getCounterFromLocalStorage() {
    return localStorage.getItem("checkCounter");
}

export function removeIdItemFromLocalStorage() {
    return localStorage.removeItem("idItem");
}

export function removeCounterFromLocalStorage() {
    return localStorage.removeItem("checkCounter");
}

export function removeItemPriceFromLocalStorage() {
    return localStorage.removeItem("priceItem");
}

export function removeCartFromLocalStorage() {
    return localStorage.removeItem("cart");
}

export function convertCurrencyValueToDisplay(priceValue) {
    if(typeof priceValue !== "number") {
      throw new Error("priceValue is not a number");  
    }

    let preparedValue = priceValue;
    
    // test if it works directly with "pricevalue" variable
    console.log("Price Value", priceValue);

    // return `${priceValue}`;
    // return `${priceValue||0}`.replace(".", "").replace(",", ".");
    // return `${priceValue||0}`.replace(",", "").replace(".", ",");

    return preparedValue.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});
}