//Scroll Up

document.getElementById("button-up").addEventListener("click", scrollup);

function scrollup() {

    var currenteScroll = document.documentElement.scrollTop;

    if (currenteScroll > 0) {
        window.requestAnimationFrame(scrollup);
        window.scrollTo(0, currenteScroll - (currenteScroll / 10));
    }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function () {

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500) {
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 500) {
        buttonUp.style.transform = "scale(0)";
    }

}
