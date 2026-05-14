@@include('jquery-3.6.0.min.js')
@@include('slick.js')

$(function() {
    $('.index-slider__wrapper-bg').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
});
})