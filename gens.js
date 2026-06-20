let text = document.querySelector('.text-box');
let btn = document.querySelector('.button');
let img = document.querySelector('.gen-image');

btn.addEventListener('click', function () {
    if (text.value >= 1900 && text.value <= 1998) {
        img.classList.remove('hidden');
        img.src = "./images/ermagherd.jpg";
    } else if (text.value < 1900) {
        img.classList.remove('hidden');
        img.src = "./images/grave.jpg";
    } else if (text.value >= 2000 && text.value <= 2009) {
        img.classList.remove('hidden');
        img.src = "./images/doge.jpg";
    } else if (text.value >= 2010 && text.value <= 2018) {
        img.classList.remove('hidden');
        img.src = "./images/car.jfif";
    }
});