let offset = 0;
const sliderline = document.querySelector(".slider-line");

document.querySelector(".slider-next").addEventListener('click', function (){
    offset += 1030;
    sliderline.style.left = offset + 'px';
});
