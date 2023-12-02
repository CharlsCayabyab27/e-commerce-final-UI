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

// Update Total 
function updateTotal() {
    var cartItemContainer = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartItemContainer.getElementsByClassName("cart-box"); 
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("₱", "")); 
        var quantity = parseInt(quantityElement.value);
        total = total + price * quantity;
    }
    document.getElementsByClassName("total-price")[0].innerText = "₱" + total;
}

