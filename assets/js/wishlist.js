document.addEventListener("DOMContentLoaded", () => {
    const wishlistButtons = document.querySelectorAll(".wishlist-icon");
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Load existing wishlist state on page load
    wishlistButtons.forEach((button) => {
        const productId = button.dataset.productId;
        const icon = button.querySelector("ion-icon");

        if (wishlist.includes(productId)) {
            icon.setAttribute("name", "heart");
        }

        // Add click event to toggle wishlist state
        button.addEventListener("click", () => {
            const isWishlisted = wishlist.includes(productId);

            if (isWishlisted) {
                // Remove from wishlist
                wishlist = wishlist.filter((id) => id !== productId);
                icon.setAttribute("name", "heart-outline");
            } else {
                // Add to wishlist
                wishlist.push(productId);
                icon.setAttribute("name", "heart");
            }

            // Save updated wishlist to local storage
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
        });
    });
});
