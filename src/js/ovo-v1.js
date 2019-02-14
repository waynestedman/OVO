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
$('#usesSlider').slick({
    // focusOnChange: true,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 1200,
    swipe: true,
    // fade: true,
    // cssEase: 'ease-in-out',
    // pauseOnHover: true
});

  // $('#ingredientsDesc').slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     fade: true,
  //     asNavFor: '#ingredientsSlider'
  // });
  // $('#ingredientsSlider').slick({
  //   slidesToShow: 7,
  //   slidesToScroll: 1,
  //   asNavFor: '#ingredientsDesc',
  //   dots: false,
  //   centerMode: true,
  //   centerPadding: '60px',
  //   focusOnSelect: true,
  // });
}); //doc ready
