$(document).ready(function(){
    $('#nav>ul>li').on('mouseenter keyup', function(){
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('#header').on('mouseleave', function(){
        $('#nav>ul>li').removeClass('on');
    });

    $('.all_menu button').on('focus', function(){
        $('#nav>ul>li').removeClass('on');
    });

    $('.amb_cont_anchor ul li').on('click', function(){
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('.all_menu_btn').on('click', function(){
        $('.all_menu_bg').show();
    });

    $('.at_close').on('click', function(){
        $('.all_menu_bg').hide();
    });

    const swiper1 = new Swiper('.swiper1', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 1200,
        slidesPerView: 1,
        disableOnInteraction: false,

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
        },

      });

      const swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 1200,
        slidesPerView: 1,
        autoplay: {
            duration: 4000,
        },
        disableOnInteraction: false,

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next2',
          prevEl: '.swiper-button-prev2',
        },

        pagination: {
            el: '.swiper-pagination2',
            type: 'fraction',
        },

      });

      swiper1.controller.control = swiper2;
      swiper2.controller.control = swiper1;

      $('.swiperPlayPause2').on('click', function(e){
        e.preventDefault();
         $(this).toggleClass('active');
         
         if($(this).hasClass('active')){
             swiper2.autoplay.stop();    
         }
         
         else{
             swiper2.autoplay.start();
         }
     });

     const swiper3 = new Swiper('.swiper3', {
        direction: 'horizontal',
        loop: true,
        speed: 600,
        slidesPerView: 'auto',
        spaceBetween: 20,
        autoplay: {
            duration: 1800,
        },
        disableOnInteraction: false,

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next3',
          prevEl: '.swiper-button-prev3',
        },

      });

      $('.langBtn>a').on('click', function(e){
        e.preventDefault();
        $('.langBtn').toggleClass('active');
      });

      const swiper4 = new Swiper('.swiper4', {
        direction: 'vertical',
        loop: true,
        speed: 600,
        slidesPerView: 1,
        autoplay: {
            duration: 1800,
        },
        disableOnInteraction: false,

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next4',
          prevEl: '.swiper-button-prev4',
        },

      });

      $('.mnt_f1>li').on('click', function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
      });

      $('.mst_f1>li').on('click', function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
      });

      $('ul.snt_f1>li').on('click', function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
      });

      const swiper5 = new Swiper('.swiper5', {
        direction: 'horizontal',
        loop: true,
        speed: 1500,
        slidesPerView: 1,
        disableOnInteraction: false,

      });

      const swiper6 = new Swiper('.swiper6', {
        direction: 'horizontal',
        loop: true,
        speed: 1500,
        slidesPerView: 1,
        autoplay: {
            duration: 3000,
        },
        disableOnInteraction: false,

        pagination: {
          el: '.swiper-pagination6',
          type: 'fraction',
      },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next6',
          prevEl: '.swiper-button-prev6',
        },

      });

      swiper5.controller.control = swiper6;
      swiper6.controller.control = swiper5;

      $('.swiperPlayPause6').on('click', function(e){
        e.preventDefault();
         $(this).toggleClass('active');
         
         if($(this).hasClass('active')){
             swiper6.autoplay.stop();    
         }
         
         else{
             swiper6.autoplay.start();
         }
     });

     $('ul.ftb_f1>li').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('active').siblings().removeClass('active');
    });

});

window.addEventListener('load', function() {
  var allElements = document.getElementsByTagName('*');
  Array.prototype.forEach.call(allElements, function(el) {
  var includePath = el.dataset.includePath;
  if (includePath) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            el.outerHTML = this.responseText;
        }
    };
    xhttp.open('GET', includePath, true);
    xhttp.send();
  }
  });
  });