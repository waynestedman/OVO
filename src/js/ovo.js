$(document).ready(function(){
  $('#testimonialsSlider').slick({
    dots: false,
    // arrows: true,
    // autoplay: true,
    // autoplaySpeed: 4000,
    // fade: true,
    focusOnChange: true,
    speed: 1200,
    // cssEase: 'ease-in-out',
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    swipe: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  }); // testimonials slider

$('#usesSlider-imgs').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '#usesSlider-text'
});
$('#usesSlider-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '#usesSlider-imgs',
  dots: true,
  fade: true,
  // centerMode: true,
  focusOnSelect: true
});


}); //doc ready
