const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sliderContainer = document.querySelector(".slider-container");
const sliderLength = rightSlide.querySelectorAll("div").length;

let activeSliderindex = 0;

leftSlide.style.top = `-${(sliderLength - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide('up'));
downBtn.addEventListener("click", () => changeSlide('down'));

function changeSlide(direction) {
    sliderHeight = sliderContainer.clientHeight;
    if(direction === 'up'){
        activeSliderindex ++
        if(activeSliderindex > sliderLength - 1){
            activeSliderindex = 0
        }
    }if(direction === 'down'){
        activeSliderindex --
        if(activeSliderindex < sliderLength - 1){
            activeSliderindex = 0
        }
    }
    rightSlide.style.transform = `translateY(-${activeSliderindex * sliderHeight}px)`
    leftSlide.style.transform = `translateY(${activeSliderindex * sliderHeight}px)`
}
