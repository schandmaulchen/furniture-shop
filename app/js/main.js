$(function() {

  $('.menu-btn, .menu__link').on('click', function(){
    $('.header__menu').toggleClass('header__menu--active');
    $('.user-nav').toggleClass('user-nav--open');
    $('body').toggleClass('lock-scroll');
    $('.menu-btn').toggleClass('menu-btn--close');
  });

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
    responsive: [
      {
        breakpoint: 1200,
        settings : {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings : {
          slidesToShow: 2
        }
      },

      {
        breakpoint: 480,
        settings : {
          slidesToShow: 1
        }
      },
    ]
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