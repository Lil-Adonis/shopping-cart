
const cartContainer = document.querySelector('.cart-container');

eventListeners();

//all event listeners
function eventListeners(){
    //toggle navbar when toggle button is calicked
    document.querySelector('.navbar-toggler').
    addEventListener('click', () => {
        document.querySelector('.navbar-collapse').classList.
        toggle('show-navbar'); 
    });

    //show hidden container
    document.getElementById('cart-btn').addEventListener
    ('click', () =>{
        cartContainer.classList.toggle('show-cart-container');

    });
}