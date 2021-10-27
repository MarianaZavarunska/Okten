const btnBurger = document.querySelector('.header-burger');
const menu = document.querySelector('.header-menu');

btnBurger.addEventListener('click' , () =>{
    btnBurger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');
})
