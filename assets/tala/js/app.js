let prev = document.getElementById('prev');
let next = document.getElementById('next');
let image = document.querySelector('.images2');
let items = document.querySelectorAll('.images2 .item');
let contents = document.querySelectorAll('.content .item');

let rotate = 0;
let active = 0;
let countItem = items.length;
let rotateAdd = 360 / countItem;

function nextSlider() {
    active = active + 1 > countItem - 1 ? 0 : active + 1;
    rotate = rotate + rotateAdd; 
    show();
}

function prevSlider() {
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    rotate = rotate - rotateAdd; 
    show();     
}

function show() {
    image.style.setProperty("--rotate", rotate + 'deg');
    contents.forEach((content, key) => {
        if (key === active) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
}

next.onclick = nextSlider;
prev.onclick = prevSlider;

const autoNext = setInterval(nextSlider, 8000);

// Gestione swipe
let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

image.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
});

image.addEventListener('touchmove', function(event) {
    endX = event.touches[0].clientX;
    endY = event.touches[0].clientY;
});

image.addEventListener('touchend', function(event) {
    let diffX = endX - startX;
    let diffY = endY - startY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        // Swipe orizzontale
        if (diffX > 0) {
            prevSlider(); // Swipe destra
        } else {
            nextSlider(); // Swipe sinistra
        }
    }

    // Reset variabili
    startX = 0;
    startY = 0;
    endX = 0;
    endY = 0;
});
