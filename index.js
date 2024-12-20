const hamburger = document.querySelector(".hamburger")
const OffScreenMenu = document.querySelector(".off-screen-menu")
const FavoriteButton =  document.querySelector(".favorite-button")
const CartButton =  document.querySelector(".cart-button")
const AddToCart = document.querySelector(".add-to-cart")

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

document.querySelector(".textbox").oninput = function(){
    let val = this.value.trim().toLowerCase();
    let items = document.querySelectorAll(".cards-holder .card") 
    if (val != "") {
        items.forEach(function(elem){
            if(elem.innerText.toLowerCase().search(val) == -1) {
                elem.classList.add('hide')
            }
            else {
                elem.classList.remove("hide")
            }
        });
    } 
    else {
        items.forEach(function(elem){ 
                elem.classList.remove('hide')
            });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const favoriteButtons = document.querySelectorAll('.add-to-favorite');
  
    favoriteButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const card = event.target.closest('.card');
        const cardId = card.dataset.id;
        const cardData = {
          id: cardId,
          img: card.querySelector('img').src,
          name: card.querySelector('.naming').textContent,
          price: card.querySelector('.price').textContent,
        };
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
        // Перевіряємо, чи вже є товар у списку
        if (favorites.some(fav => fav.id === cardId)) {
          alert('Цей товар вже в улюблених!');
          return;
        }
        favorites.push(cardData);
        localStorage.setItem('favorites', JSON.stringify(favorites)); // Зберігаємо в localStorage
  
        alert('Товар додано до улюблених!');
      });
    });
  });

  
