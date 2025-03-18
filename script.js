document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");
});

document.addEventListener("DOMContentLoaded", function() {

    const cartCount = document.getElementById("cart-count");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartCount.innerText = cart.length;

});