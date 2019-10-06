document.getElementsByClassName("next-slide").onclick = sliderNext;
    var top = 0;
function sliderNext() {
    var slider__line = document.getElementsByClassName("slider__line");
    top = top - 252;
    slider__line.style.top = top +'px';
}