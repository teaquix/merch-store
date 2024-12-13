const hamburger = document.querySelector(".hamburger")
const OffScreenMenu = document.querySelector(".off-screen-menu")
const FavoriteButton =  document.querySelector(".favorite-button")
const CartButton =  document.querySelector(".cart-button")
const AddToCart = document.querySelector(".add-to-cart")
const AddToFavorite = document.querySelector(".add-to-favorite")

/* AddToCart.addEventListener.("click", () => {
    
}) */

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    OffScreenMenu.classList.toggle("active");
})

CartButton.addEventListener("click", () => {
    window.location.href = 'cart.html';
})

FavoriteButton.addEventListener("click", () => {
    window.location.href = 'favorites.html';
})

