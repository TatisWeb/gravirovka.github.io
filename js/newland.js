
function activateMenuItem(element) {
  // Получаем все пункты меню
  let menuItems = document.getElementsByClassName("thref");

  // Проходимся по каждому пункту меню
  for (let i = 0; i < menuItems.length; i++) {
    // Удаляем класс "active" у всех пунктов
    menuItems[i].classList.remove("_active");
  }

  // Добавляем класс "active" к пункту меню, по которому было произведено нажатие
  element.classList.add("_active");
  
}
// оставляем только Браслеты в слайдере
$('#braslet').on('click', function (braslet) {
   $('#slider-main').css('display', 'none');
   $('#slider-adresnik').css('display', 'none');
   $('#slider-geton').css('display', 'none');
   $('#slider-ypakovka').css('display', 'none');
   $('#slider-podarok').css('display', 'none');
   $('#slider-braslet').css('display', 'flex').css('opacity', '1');
});
// оставляем только товары в слайдере
$('#tovar').on('click', function (tovar) {
  $('#slider-braslet').css('display', 'none');
  $('#slider-adresnik').css('display', 'none');
  $('#slider-geton').css('display', 'none');
  $('#slider-ypakovka').css('display', 'none');
  $('#slider-podarok').css('display', 'none');
  $('#slider-main').css('display', 'flex');
});

// оставляем только adresniki в слайдере
$('#adresnik').on('click', function(adresniki) {
    $('#slider-kylon').css('display', 'none');
    $('#slider-braslet').css('display', 'none');
    $('#slider-main').css('display', 'none');
    $('#slider-geton').css('display', 'none');
    $('#slider-ypakovka').css('display', 'none');
    $('#slider-podarok').css('display', 'none');
    $('#slider-adresnik').css('display', 'flex');
});
// оставляем только geton в слайдере
$('#geton').on('click', function(geton) {
  $('#slider-kylon').css('display', 'none');
    $('#slider-braslet').css('display', 'none');
    $('#slider-adresnik').css('display', 'none');
    $('#slider-main').css('display', 'none');
    $('#slider-ypakovka').css('display', 'none');
    $('#slider-podarok').css('display', 'none');
    $('#slider-geton').css('display', 'flex');
});
// оставляем только ypakovka в слайдере
$('#ypakovka').on('click', function(ypakovka) {
  $('#slider-kylon').css('display', 'none');
  $('#slider-braslet').css('display', 'none');
  $('#slider-adresnik').css('display', 'none');
  $('#slider-geton').css('display', 'none');
  $('#slider-main').css('display', 'none');
  $('#slider-podarok').css('display', 'none');
  $('#slider-ypakovka').css('display', 'flex');
});
// оставляем только podarok в слайдере
$('#podarok').on('click', function(podarok) {
  $('#slider-kylon').css('display', 'none');
    $('#slider-braslet').css('display', 'none');
    $('#slider-adresnik').css('display', 'none');
    $('#slider-geton').css('display', 'none');
    $('#slider-ypakovka').css('display', 'none');
    $('#slider-main').css('display', 'none');
    $('#slider-podarok').css('display', 'flex');
});
// button intro
$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
  $('.content').toggleClass('content_active');
});
$('.menu-btn').on('click', function(m) {
 m.preventDefault();
 $(this).toggleClass('menu-btn_active');
});

//button menu main

$('.menu-close-btn').on('click', function(u) {
 u.preventDefault();
 $('.menu').removeClass('menu_active');
 $('.content').removeClass('content_active');
 $('.menu-btn').removeClass('menu-btn_active'); });

//button want bay

$('.btn-neon').on('click', function(e) {
 e.preventDefault();
 $('.modal-s__main').toggleClass('show');
});

// btn want bay design


$('.btn-design').on('click', function(e) {
 e.preventDefault();
 $('.modal-s__main').toggleClass('show');
});

// modal button
$('._modal').on('click', function(e) {
 e.preventDefault();
 $('.modal-s__main').addClass('show');
});

//$('.btn-bay').click ( function() 
//  $('.mainfoto').removeClass('wow zoomIn');
 //   $('p').removeClass('wow zoomInUp');
 //   new WOW().init();
   // $(this).toggleClass('wow hinge ');

  
//});


$('.modal-btn').on('click', function(e) {
  e.preventDefault();
  $('.modal-s__main').removeClass('show');
  //$('.body').removeClass('no-scroll');
});


//first slider owl corusel 2
$(document).ready(function() {

 $(function() {
  // Owl Carousel
 $(".owl-carousel").owlCarousel({
   items: 1,
   margin: 0,
   loop: false,
   nav: true,
   navSpeed: 100,
   dots: false, 
   autoplayTimeout:3000,
   animateOut: 'fadeOut',
   animateIn: 'fadeIn',
   smartSpeed: 100,
  });
  
  var owl = $(".anim");
  owl.owlCarousel();
  $('.js-owl-prev').click(function() {
   owl.trigger('next.owl.carousel');
  });
  $('.js-owl-next').click(function() {
   owl.trigger('prev.owl.carousel');
  });
 });
});


// first slider animation

$(document).ready(function() {

 // Declare Carousel jquery object
 var owl = $('.anim');

 // Carousel initialization
 
 // add animate.css class(es) to the elements to be animated
 function setAnimation(_elem, _InOut) {
  // Store all animationend event name in a string.
  // cf animate.css documentation
  var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  _elem.each(function() {
   var $elem = $(this);
   var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

   $elem.addClass($animationType).one(animationEndEvent, function() {
    $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
   });
  });
 }

 // Fired before current slide change
 owl.on('change.owl.carousel', function(event) {
  var $currentItem = $('.owl-item', owl).eq(event.item.index);
  var $elemsToanim = $currentItem.find("[data-animation-out]");
  setAnimation($elemsToanim, 'out');
 });

 // Fired after current slide has been changed
 owl.on('changed.owl.carousel', function(event) {

  var $currentItem = $('.owl-item', owl).eq(event.item.index);
  var $elemsToanim = $currentItem.find("[data-animation-in]");
  setAnimation($elemsToanim, 'in');
 })

});

// second slider owl carousel 2
 
 // Slider portfolio
 
 //first slider owl corusel 2
 $(function() {
 // Owl Carousel
 $(".slider2").owlCarousel({
   items: 1,
   center: true, 
   margin: 10,
   loop: true,
   nav: true,
   navSpeed: 500,
   dots: true, 
   responsive: {
     0: {
       items: 1
     }
     },
     responsive: {
         600: {
           items: 2
         }
         },
         responsive: {
             800: {
               items: 
               2
             }
   }
 });

 });
 
 //слайдер кулон
$(document).ready(function() {
 
   $(function() {
     // Owl Carousel
     $(".slider-kylon").owlCarousel({
       items: 1,
       margin: 0,
       loop: true,
       nav: true,
       navSpeed: 500,
       dots: false
     });
 
     var owl = $(".anim-kylon");
     owl.owlCarousel();
     $('.js-owl-prev').click(function() {
       owl.trigger('next.owl.carousel');
     });
     $('.js-owl-next').click(function() {
       owl.trigger('prev.owl.carousel');
     });
   });
 });
 // анимация слайдер кулон

$(document).ready(function() {

 // Declare Carousel jquery object
 var owl = $('.anim-kylon');

 // Carousel initialization
 
 // add animate.css class(es) to the elements to be animated
 function setAnimation(_elem, _InOut) {
  // Store all animationend event name in a string.
  // cf animate.css documentation
  var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  _elem.each(function() {
   var $elem = $(this);
   var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

   $elem.addClass($animationType).one(animationEndEvent, function() {
    $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
   });
  });
 }

 // Fired before current slide change
 owl.on('change.owl.carousel', function(event) {
  var $currentItem = $('.owl-item', owl).eq(event.item.index);
  var $elemsToanim = $currentItem.find("[data-animation-out]");
  setAnimation($elemsToanim, 'out');
 });

 // Fired after current slide has been changed
 owl.on('changed.owl.carousel', function(event) {

  var $currentItem = $('.owl-item', owl).eq(event.item.index);
  var $elemsToanim = $currentItem.find("[data-animation-in]");
  setAnimation($elemsToanim, 'in');
 })

});

 //слайдер кулон
$(document).ready(function() {
 
   $(function() {
     // Owl Carousel
     $(".slider-adresnik").owlCarousel({
       items: 1,
       margin: 0,
       loop: true,
       nav: true,
       navSpeed: 500,
       dots: false
     });
 
     var owl = $(".anim-adresnik");
     owl.owlCarousel();
     $('.js-owl-prev').click(function() {
       owl.trigger('next.owl.carousel');
     });
     $('.js-owl-next').click(function() {
       owl.trigger('prev.owl.carousel');
     });
   });
 });
 // анимация слайдер adresnik

$(document).ready(function() {

 // Declare Carousel jquery object
 var owl = $('.anim-adresnik');

 // Carousel initialization
 
 // add animate.css class(es) to the elements to be animated
 function setAnimation(_elem, _InOut) {
  // Store all animationend event name in a string.
  // cf animate.css documentation
  var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  _elem.each(function() {
   var $elem = $(this);
   var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

   $elem.addClass($animationType).one(animationEndEvent, function() {
    $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
   });
  });
 }

 // Fired before current slide change
 owl.on('change.owl.carousel', function(event) {
  var $currentItem = $('.owl-item', owl).eq(event.item.index);
  var $elemsToanim = $currentItem.find("[data-animation-out]");
  setAnimation($elemsToanim, 'out');
 });

 // Fired after current slide has been changed
 owl.on('changed.owl.carousel', function(event) {

  var $currentItem = $('.owl-item', owl).eq(event.item.index);
  var $elemsToanim = $currentItem.find("[data-animation-in]");
  setAnimation($elemsToanim, 'in');
 })

});

 //слайдер geton
 $(document).ready(function() {

   $(function() {
     // Owl Carousel
     $(".slider-geton").owlCarousel({
       items: 1,
       margin: 0,
       loop: true,
       nav: true,
       navSpeed: 500,
       dots: false
     });

     var owl = $(".anim-geton");
     owl.owlCarousel();
     $('.js-owl-prev').click(function() {
       owl.trigger('next.owl.carousel');
     });
     $('.js-owl-next').click(function() {
       owl.trigger('prev.owl.carousel');
     });
   });
 });
 // анимация слайдер geton

 $(document).ready(function() {

   // Declare Carousel jquery object
   var owl = $('.anim-geton');

   // Carousel initialization

   // add animate.css class(es) to the elements to be animated
   function setAnimation(_elem, _InOut) {
     // Store all animationend event name in a string.
     // cf animate.css documentation
     var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

     _elem.each(function() {
       var $elem = $(this);
       var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

       $elem.addClass($animationType).one(animationEndEvent, function() {
         $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
       });
     });
   }

   // Fired before current slide change
   owl.on('change.owl.carousel', function(event) {
     var $currentItem = $('.owl-item', owl).eq(event.item.index);
     var $elemsToanim = $currentItem.find("[data-animation-out]");
     setAnimation($elemsToanim, 'out');
   });

   // Fired after current slide has been changed
   owl.on('changed.owl.carousel', function(event) {

     var $currentItem = $('.owl-item', owl).eq(event.item.index);
     var $elemsToanim = $currentItem.find("[data-animation-in]");
     setAnimation($elemsToanim, 'in');
   })

 });
 
  //слайдер ypakovka
  $(document).ready(function() {
 
    $(function() {
      // Owl Carousel
      $(".slider-ypakovka").owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: true,
        navSpeed: 500,
        dots: false
      });
 
      var owl = $(".anim-ypakovka");
      owl.owlCarousel();
      $('.js-owl-prev').click(function() {
        owl.trigger('next.owl.carousel');
      });
      $('.js-owl-next').click(function() {
        owl.trigger('prev.owl.carousel');
      });
    });
  });
  // анимация слайдер ypakovka
 
  $(document).ready(function() {
 
    // Declare Carousel jquery object
    var owl = $('.anim-ypakovka');
 
    // Carousel initialization
 
    // add animate.css class(es) to the elements to be animated
    function setAnimation(_elem, _InOut) {
      // Store all animationend event name in a string.
      // cf animate.css documentation
      var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
 
      _elem.each(function() {
        var $elem = $(this);
        var $animationType = 'animated ' + $elem.data('animation-' + _InOut);
 
        $elem.addClass($animationType).one(animationEndEvent, function() {
          $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
        });
      });
    }
 
    // Fired before current slide change
    owl.on('change.owl.carousel', function(event) {
      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-out]");
      setAnimation($elemsToanim, 'out');
    });
 
    // Fired after current slide has been changed
    owl.on('changed.owl.carousel', function(event) {
 
      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-in]");
      setAnimation($elemsToanim, 'in');
    })
 
  });
   //слайдер podarok
   $(document).ready(function() {
  
     $(function() {
       // Owl Carousel
       $(".slider-podarok").owlCarousel({
         items: 1,
         margin: 0,
         loop: true,
         nav: true,
         navSpeed: 500,
         dots: false
       });
  
       var owl = $(".anim-podarok");
       owl.owlCarousel();
       $('.js-owl-prev').click(function() {
         owl.trigger('next.owl.carousel');
       });
       $('.js-owl-next').click(function() {
         owl.trigger('prev.owl.carousel');
       });
     });
   });
   // анимация слайдер podarok
  
   $(document).ready(function() {
  
     // Declare Carousel jquery object
     var owl = $('.anim-podarok');
  
     // Carousel initialization
  
     // add animate.css class(es) to the elements to be animated
     function setAnimation(_elem, _InOut) {
       // Store all animationend event name in a string.
       // cf animate.css documentation
       var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  
       _elem.each(function() {
         var $elem = $(this);
         var $animationType = 'animated ' + $elem.data('animation-' + _InOut);
  
         $elem.addClass($animationType).one(animationEndEvent, function() {
           $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
         });
       });
     }
  
     // Fired before current slide change
     owl.on('change.owl.carousel', function(event) {
       var $currentItem = $('.owl-item', owl).eq(event.item.index);
       var $elemsToanim = $currentItem.find("[data-animation-out]");
       setAnimation($elemsToanim, 'out');
     });
  
     // Fired after current slide has been changed
     owl.on('changed.owl.carousel', function(event) {
  
       var $currentItem = $('.owl-item', owl).eq(event.item.index);
       var $elemsToanim = $currentItem.find("[data-animation-in]");
       setAnimation($elemsToanim, 'in');
     })
  
   });
    //слайдер braslet
    $(document).ready(function() {
   
      $(function() {
        // Owl Carousel
        $(".slider-braslet").owlCarousel({
          items: 1,
          margin: 0,
          loop: true,
          nav: true,
          navSpeed: 500,
          dots: false
        });
   
        var owl = $(".anim-braslet");
        owl.owlCarousel();
        $('.js-owl-prev').click(function() {
          owl.trigger('next.owl.carousel');
        });
        $('.js-owl-next').click(function() {
          owl.trigger('prev.owl.carousel');
        });
      });
    });
    // анимация слайдер кулон
   
    $(document).ready(function() {
   
      // Declare Carousel jquery object
      var owl = $('.anim-braslet');
   
      // Carousel initialization
   
      // add animate.css class(es) to the elements to be animated
      function setAnimation(_elem, _InOut) {
        // Store all animationend event name in a string.
        // cf animate.css documentation
        var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
   
        _elem.each(function() {
          var $elem = $(this);
          var $animationType = 'animated ' + $elem.data('animation-' + _InOut);
   
          $elem.addClass($animationType).one(animationEndEvent, function() {
            $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
          });
        });
      }
   
      // Fired before current slide change
      owl.on('change.owl.carousel', function(event) {
        var $currentItem = $('.owl-item', owl).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-animation-out]");
        setAnimation($elemsToanim, 'out');
      });
   
      // Fired after current slide has been changed
      owl.on('changed.owl.carousel', function(event) {
   
        var $currentItem = $('.owl-item', owl).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-animation-in]");
        setAnimation($elemsToanim, 'in');
      })
   
    });
    
    //animation for Slider our work
    
    
$(document).ready(function() {

 // Declare Carousel jquery object
 var owl = $('.anim-work');

 // Carousel initialization
 
 // add animate.css class(es) to the elements to be animated
 function setAnimation(_elem, _InOut) {
  // Store all animationend event name in a string.
  // cf animate.css documentation
  var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  _elem.each(function() {
   var $elem = $(this);
   var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

   $elem.addClass($animationType).one(animationEndEvent, function() {
    $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
   });
  });
 }

 // Fired before current slide change
 owl.on('change.owl.carousel', function(event) {
  var $currentItem = $('.owl-item', owl).eq(event.item.index);
  var $elemsToanim = $currentItem.find("[data-animation-out]");
  setAnimation($elemsToanim, 'out');
 });

 // Fired after current slide has been changed
 owl.on('changed.owl.carousel', function(event) {

  var $currentItem = $('.owl-item', owl).eq(event.item.index);
  var $elemsToanim = $currentItem.find("[data-animation-in]");
  setAnimation($elemsToanim, 'in');
 })

});