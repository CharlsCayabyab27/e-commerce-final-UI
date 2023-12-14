// cart 
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector(".cart");
let cartclose = document.querySelector("#cart-close");

// Open Cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};

// Close Cart
cartclose.onclick = () => {
    cart.classList.remove("active");
};

// Cart working JS
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

// Function ready
function ready() {
    // Remove Item in Cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    // Quantity Change
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
// Define addToCartClicked function
function addToCartClicked(event) {
    // Your code for handling the "Add to Cart" click event goes here
    console.log("add-cart");
}

// Add to Cart
var addCart = document.getElementsByClassName("add-cart");
for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addToCartClicked);
}
// Buy Button Work
var buyButton = document.getElementsByClassName("btn-buy")[0];

if (buyButton) {
    buyButton.addEventListener("click", buyButtonClicked);
} else {
    console.error("Button with class 'btn-buy' not found in the document.");
    }
}
// Buy Button
function buyButtonClicked(event) {
alert("Thank you for your purchase");
var cartContent = document.getElementsByClassName("cart-content")[0];
while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}


// Remove Item in Cart  
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

// Quantity Change
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}
// Add to cart
function addCartClicked(event) {
var button = event.target;
var shopproduct = button.parentElement.parentElement;
var title = shopproduct.getElementsByClassName('product-title')[0].innerText;
var price = shopproduct.getElementsByClassName('price')[0].innerText;
var productImg = shopproduct.getElementsByClassName("product-img")[0].src;
addProductTocart(title, price, productImg);
updateTotal();
}
function addProductTocart(title, price, productImg) {
    var cartShopBox = document.createElement('div')
    cartShopBox.classList.add("cart-box")
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-product-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert("This item is already added to the cart")
        return;
        }
    }
    
}
var cartBoxContent = `
    <img src="${productImg}" alt="" class="product-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    <!-- Remove-Item -->
    <i class='bx bx-trash-alt cart-remove'></i>`; // Added closing angle bracket

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);

// Set up event listeners
cartShopBox
    .getElementsByClassName('cart-remove')[0]
    .addEventListener('click', removeCartItem);

cartShopBox
    .getElementsByClassName('cart-quantity')[0]
    .addEventListener('change', quantityChanged);


// Update Total 
function updateTotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box"); 
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", "")); 
        var quantity = parseInt(quantityElement.value);
        total = total + price * quantity;
        // if price contain some Value cents 
        total = Math.round(total * 100) / 100;

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;

    }
}
    

