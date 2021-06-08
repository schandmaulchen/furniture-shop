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

  $('.catalog__btn-filter').on('click', function() {
    $('.catalog__filters').addClass('catalog__filters--active');
  });

  // close sidebar when clicking outside  
  $(document).on('click', function(e) {
    if(!$('.catalog__filters').is(e.target) 
        && !$('.catalog__btn-filter').is(e.target)
        && !$(e.target).closest('.catalog__btn-filter').length
        && !$(e.target).closest('.catalog__filters').length
        && $('.catalog__filters').hasClass('catalog__filters--active')) {
          $('.catalog__filters').removeClass('catalog__filters--active');
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