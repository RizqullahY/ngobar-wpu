// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav'); 

//ketika hamburger-menu di klik
document.querySelector('#hamburger-menu').onclick = () =>{
    navbarNav.classList.toggle('active');
};


// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
document.querySelector('#search-button').onclick = (e) =>{
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}


// toggle class untuk shopping-cart
const shopCart = document.querySelector('.shopping-cart')
document.querySelector('#shopping-cart-button').onclick = (e) =>{
    shopCart.classList.toggle('active');
    e.preventDefault();
}



//klik diluar elemen [ex: sidebar untuk menghilangkan sidebar]
const hamburger = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');
const shoppingCartButton = document.querySelector('#shopping-cart-button');

document.addEventListener('click',function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){ // kalau selain item-nya yang ditekan maka class active di remove 
        navbarNav.classList.remove('active')
    }
    if(!searchButton.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active')
    }
    if(!shoppingCartButton.contains(e.target) && !shopCart.contains(e.target)){
        shopCart.classList.remove('active')
    }
});

//Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) =>{
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    }
})

//klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) =>{
    itemDetailModal.style.display = 'none';
    e.preventDefault();
}
//klik di luar modal menggunakan window
window.onclick = (e) =>{
    if(e.target === modal){
        itemDetailModal.style.display ='none';
    }
}