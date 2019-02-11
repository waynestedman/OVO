$(document).ready(function(){
  $('#testimonialsSlider').slick({
    dots: false,
    // arrows: true,
    // autoplay: true,
    // autoplaySpeed: 4000,
    // fade: true,
    speed: 1200,
    // cssEase: 'ease-in-out',
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
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
  //   responsive: [
  //     {
  //       breakpoint: 1025,
  //       settings: {
  //         arrows: true,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 5
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: true,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 3
  //       }
  //     }
  //   ]
  // });

}); //doc ready
