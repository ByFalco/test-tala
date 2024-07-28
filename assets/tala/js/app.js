let prev = document.getElementById('prev');
let next = document.getElementById('next');
let image = document.querySelector('.images2');
let items = document.querySelectorAll('.images2 .item');
let contents = document.querySelectorAll('.content .item');

let rotate = 0;
let active = 0;
let countItem = items.length;
let rotateAdd = 360 / countItem;

function nextSlider(){
    active = active + 1 > countItem - 1 ? 0 : active + 1;
    rotate = rotate + rotateAdd; 
    show();
}
function prevSlider(){
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    rotate = rotate - rotateAdd; 
    show();     
     
}
function show(){
    image.style.setProperty("--rotate", rotate + 'deg');
    image.style.setProperty("--rotate", rotate + 'deg');
    contents.forEach((content, key) => {
        if(key == active){
            content.classList.add('active');
        }else{
            content.classList.remove('active');
        }
    })
}
next.onclick = nextSlider;
prev.onclick = prevSlider;
const autoNext = setInterval(nextSlider, 8000);

document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const dots = document.querySelectorAll('.dot');

    // Funzione per aggiornare l'indicatore dei pallini
    const updateDots = (index) => {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    };

    let currentIndex = 0; // Indice iniziale

    // Event listener per il pulsante "precedente"
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : dots.length - 1;
        updateDots(currentIndex);
    });

    // Event listener per il pulsante "successivo"
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < dots.length - 1) ? currentIndex + 1 : 0;
        updateDots(currentIndex);
    });

    // Impostare l'indicatore iniziale dei pallini
    updateDots(currentIndex);
});

