$(function() {

  $('.main-slider__inner').slick({
    dots: true,
    arrows: false,
  });

  $('.partners__list').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
  });


// mixitup
  var productsFilter = $('.products'),
      novationFilter = $('.novation');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixProducts = mixitup(productsFilter, config), 
      mixNovation = mixitup(novationFilter, config);  
});