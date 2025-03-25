document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const productCount = document.getElementById("product-count");

    // Get cart from local storage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Render cart items
    function renderCart() {
        cartItemsContainer.innerHTML = "";
        let totalPrice = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<tr><td colspan='5'>Your cart is empty 🛒</td></tr>";
        } else {
            cart.forEach((item, index) => {
                if (!item.name || !item.price || !item.image) return; // Skip invalid items

                totalPrice += item.price * item.quantity;
                cartItemsContainer.innerHTML += `
                    <tr>
                        <td><img src="${item.image}" alt="Product" width="60"></td>
                        <td>${item.name}</td>
                        <td class="quantity-controls">
                            <button onclick="updateQuantity(${index}, -1)">-</button>
                            <input type="text" value="${item.quantity}" readonly>
                            <button onclick="updateQuantity(${index}, 1)">+</button>
                        </td>
                        <td>${item.price * item.quantity}€</td>
                        <td><button class="delete-btn" onclick="removeFromCart(${index})">×</button></td>
                    </tr>
                `;
            });
        }
        productCount.textContent = `${cart.length} Products: ${totalPrice}€`;
        cartTotal.textContent = `${totalPrice + 5}€`; // Adding flat 5€ shipping fee
    }

    // Update quantity
    window.updateQuantity = (index, change) => {
        if (cart[index]) {
            cart[index].quantity += change;
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        }
    };

    // Remove item
    window.removeFromCart = (index) => {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    };

    // Initial render
    renderCart();
});
