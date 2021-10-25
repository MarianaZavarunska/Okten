const menuBurger = document.querySelector('.header-burger');
const headerMenu = document.querySelector('.header-menu');

menuBurger.addEventListener('click', addClass);

function addClass() {
    menuBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    document.body.classList.toggle('lock');
}