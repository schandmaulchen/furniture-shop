$(function() {   
  
  $('.menu-btn').on('click', function(){
    $('.header__menu').toggleClass('header__menu--active');
    $('.user-nav').toggleClass('user-nav--open');
    $('body').toggleClass('lock-scroll');
    $('.menu-btn').toggleClass('menu-btn--close');
  });

  $('.menu__link').on('click', function() {
    $('.menu-btn').removeClass('menu-btn--close');
    $('.user-nav').removeClass('user-nav--open');
    $('body').removeClass('lock-scroll');
    $('.header__menu').removeClass('header__menu--active');
  });

  $('.catalog__btn').on('click', function () {
    $('.catalog__btn').removeClass('catalog__btn--active');
    $(this).addClass('catalog__btn--active');
  });

  $('.btn-list').on('click', function() {
    $('.catalog__list .product').addClass('product--list');
  });

  $('.btn-grid').on('click', function() {
    $('.catalog__list .product').removeClass('product--list');
  });

  $('.aside-btn').on('click', function() {
    $('.aside').addClass('aside--active');
  });

  $('.aside__close').on('click', function() {
    $('.aside').removeClass('aside--active');
  })

  // close sidebar when clicking outside  
  $(document).on('click', function(e) {
    if(!$('.aside').is(e.target) 
        && !$('.aside-btn').is(e.target)
        && !$(e.target).closest('.aside-btn').length
        && !$(e.target).closest('.aside').length
        && $('.aside').hasClass('aside--active')) {
          $('.aside').removeClass('aside--active');
    }
    
    if (!$('.header__menu').is(e.target) 
    && !$('.menu-btn').is(e.target)
    && !$(e.target).closest('.menu-btn').length
    && $('.header__menu').hasClass('header__menu--active')) {
      $('.header__menu').removeClass('header__menu--active');
      $('.user-nav').removeClass('user-nav--open');
      $('.menu-btn').removeClass('menu-btn--close');
      $('body').removeClass('lock-scroll');
    }
  });

  // sliders

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

  $('.catalog-filter__range').ionRangeSlider({
    type: 'double',
    prefix: '$',
    onStart: function (data) {
      $('.catalog-filter__price-from').text(data.from);
      $('.catalog-filter__price-to').text(data.to);
    },
    onChange: function (data) {
      $('.catalog-filter__price-from').text(data.from);
      $('.catalog-filter__price-to').text(data.to);
    },
  });


// rating
$('.product__rating').rateYo({
  starWidth: '17px',
  normalFill: '#d6d6d6',
  ratedFill: '#ffcc00',
  readOnly: true,
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