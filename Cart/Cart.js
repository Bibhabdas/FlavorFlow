document.addEventListener("DOMContentLoaded", () => {
    displayCart();
});

function displayCart() {
    let cart = JSON.parse(localStorage.getItem("recipeOrders")) || [];
    let cartContent = document.getElementById("cartContent");
    let totalPrice = document.getElementById("totalPrice");

    if (cart.length === 0) {
        cartContent.innerHTML = `<div class="empty-msg"><p>Your list is empty.</p></div>`;
        totalPrice.innerHTML = "";
        return;
    }

    let grandTotal = 0;

    cartContent.innerHTML = cart.map((product, i) => {
        let itemPrice = Math.round(product.rating * 100);
        grandTotal += itemPrice; // Add to grand total

        return `
        <div class="cart-item">
            <img src="${product.image}" alt="${product.name}">
            <div class="item-info">
                <h3>${product.name}</h3>
                <p><b>Price:</b> ₹${itemPrice}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${i})">Remove</button>
        </div>
        `;
    }).join('');

    // Displaying the Grand Total in the summary bar
    totalPrice.innerHTML = `
        <h3>Grand Total</h3>
        <span style="font-size: 1.5rem; font-weight: 800;">₹${grandTotal}</span>
    `;
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("recipeOrders")) || [];
    cart.splice(index, 1);
    localStorage.setItem("recipeOrders", JSON.stringify(cart));
    displayCart();
}