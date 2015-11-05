// Let the site play ground begin
// ----------------------------------------------------
// 1.0 ============ home-banner slider initializer

 
 
// 1.0 home-banner slider initializer
// will slide slider
// ------------------------------------------
var swiper = new Swiper('.home-banner .swiper-container', {
    autoplay: 9000   
});

var swiper = new Swiper('.other-vessel .swiper-container', {
    pagination: '.other-vessel .swiper-pagination',
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 30,
    nextButton: '.other-vessel .next',
    prevButton: '.other-vessel .prev',
});

var swiper = new Swiper('.partners .swiper-container', {
    pagination: '.partners .swiper-pagination',
    slidesPerView: 6,
    paginationClickable: true,
    spaceBetween: 30,
    nextButton: '.partners .next',
    prevButton: '.partners .prev',
});

var swiper = new Swiper('.clients .swiper-container', {
    pagination: '.clients .swiper-pagination',
    slidesPerView: 5,
    paginationClickable: true,
    spaceBetween: 20,
    nextButton: '.clients .next',
    prevButton: '.clients .prev',
});