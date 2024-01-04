const burgerNavLinksA = document.querySelectorAll('.burger-nav-links a');
const burgerNavLinks = document.querySelector('.burger-nav-links');
const burgerIcon = document.querySelector('.burger-icon');




function toggleMenu() {
    burgerNavLinks.classList.toggle('display');
    burgerIcon.classList.toggle('open');
    console.log('cunt');
}

