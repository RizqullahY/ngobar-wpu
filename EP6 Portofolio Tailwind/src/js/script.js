//! Navbar Fixed
// window.onscroll = function(){
//    const header = document.querySelector('#header');
//    const fixedNav = header.offsetTop;

//    if(window.pageYOffset > fixedNav){
//       header.classList.add('navbar-fixed');
//    }else{
//       header.classList.remove('navbar-fixed');
//    }
// }

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
	hamburger.classList.toggle("hamburger-active");
	navMenu.classList.toggle("hidden");
});

// Klik diluar hamburger
window.addEventListener("click", function (e) {
	if (e.target != navMenu && e.target != hamburger) {
		hamburger.classList.remove("hamburger-active");
		navMenu.classList.add("hidden");
	}
});

// Dark Mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
	if (darkToggle.checked) {
		html.classList.add("dark");
	} else {
		html.classList.remove("dark");
	}
});



