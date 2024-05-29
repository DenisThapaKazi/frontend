// Product data (for demonstration)
const products = [
    { id: 1, name: "Product 1", price: 50 },
    { id: 2, name: "Product 2", price: 40 }
];

let cart = [];

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Function to update cart UI
function updateCart() {
    const cartItemsElement = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    // Clear previous items
    cartItemsElement.innerHTML = "";

    // Update cart items
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsElement.appendChild(li);
    });

    // Calculate and update total
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    cartTotalElement.textContent = total;
}

// Function to remove product from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Function to simulate checkout
function checkout() {
    alert("Checkout completed!");
    cart = [];
    updateCart();
}
