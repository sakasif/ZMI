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

$('.mobile-nav').click(function(){
    $('#main-head .bottom ul').slideToggle();
});