//menu 
const menuIcon = document.querySelector('.menu-icon');
const primaryNav = document.querySelector('.primary-nav');
menuIcon.addEventListener('click', function () {
    primaryNav.classList.toggle("toggleMenu")
   // primaryNav.style.transform="translate(0px)"
})
var slider = tns({
    container: '.tst-wrapper',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    nav: false,
    mouseDrag: true,
    autoplayButtonOutput: false,
    swipeAngle:true
});