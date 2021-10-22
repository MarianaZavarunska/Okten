const additionalItems = document.querySelectorAll(".additional-item");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeItem = 0;

rightBtn.addEventListener('click', () => {
    activeItem++;
    if(activeItem >additionalItems.length-1) {
        activeItem = 0;
    }
    setActiveItem();
});

leftBtn.addEventListener('click', () => {
    activeItem--;
    if(activeItem < 0) {
        activeItem = additionalItems.length -1;
    }
    setActiveItem();
});


function setActiveItem() {
    additionalItems.forEach(item =>item.classList.remove('active'));
    additionalItems[activeItem].classList.add('active');
}