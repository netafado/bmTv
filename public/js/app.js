"use strict";
(function($){


    $('#slider').slick({
        dots: false,
        infinite: false,
        speed: 400,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        asNavFor: '#sliderH2'
      });

      $('#sliderH2').slick({
        dots: false,
        asNavFor: '#slider',
        infinite: false,
        speed: 400,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false
      });
          
    //esse evento acontece quando toda a página é carregada
    window.addEventListener('load', function(){
        $('#loader').fadeOut(200);
        $('body').height(window.innerHeight)

    });

    window.addEventListener('resize', function(){
        maxHeightScreenMinus($(".c-banner"));
        $('.flex-popUp').height((window.innerHeight * .4) - 30)
    })

    $('.container-curriculo').on('click', function(){
        $(this).children('.container-filho').slideToggle();
    });

    window.addEventListener('scroll', function(e){
        mostrarIrTopo(e);
    });
})($)