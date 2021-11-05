const carouselItems = document.querySelector('.carousel-items');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const carouseAsidelItem = document.querySelector('.carousel-aside-items');
const carouselTopItemsWrapper = document.querySelector('.carousel-top-items');
const btnLeft = document.getElementById('left-top');
const btnRight = document.getElementById('right-top');
const btnFav = document.querySelectorAll('.fav');


const carouselTopItems = document.querySelectorAll('.carousel-top-items .carousel-top-item')
const discountContainers = document.querySelectorAll('.carousel-items .discount-container');

let idx = 0;

let interval = setInterval(run, 3000)

function run() {
    idx++;

    changeImage();
}

function changeImage() {
  if(idx > discountContainers.length - 1 ) {
    idx = 0
  } else if( idx < 0) {
      idx = discountContainers.length - 1 
  }

  carouselItems.style.transform = `translateY(${-idx * 375}px)`
  carouseAsidelItem.style.transform = `translateY(${-idx * 215}px)`
  
  let circles = document.querySelectorAll('.circle');
  circles.forEach((el, index) => {
        if(index != idx) {
            el.classList.remove('c-active');
        }
        else{
            el.classList.add('c-active');
        }
  });
}

function resetInterval() {
    clearInterval(interval)

    interval = setInterval(run, 3000)
}

rightBtn.addEventListener('click', () => {
    idx++

    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--

    changeImage()
    resetInterval()
})

// TOP

let index = 0;

btnRight.addEventListener('click', () => {
    index++

    changeCard()
})

btnLeft.addEventListener('click', () => {
    index--

    changeCard()
})

function changeCard () {
    if(index > 2 || index < -2) {
        index = 0
      } 
    
     carouselTopItemsWrapper.style.transform = `translateX(${(index < 0 ? index : -index) * 460}px)`
}


btnFav.forEach(element => { 
    element.addEventListener('click', (e) => {
        e.target.classList.toggle('far')
        e.target.classList.toggle('fas');
    })
});

