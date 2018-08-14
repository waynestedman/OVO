$(document).ready(function(){
  $('#ingredientsDesc').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 2000,
    fade: true,
    cssEase: 'ease-in-out',
    pauseOnHover: true
}); // ingredients desc
  $('#commentsSlider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    speed: 1200,
    cssEase: 'ease-in-out'
   }); // comments slider
}); //doc ready
