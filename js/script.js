// Activador de jQuery - Función principal de jQuery
$(document).ready(function(){

    // Activación de transición del menú principal y del menú móvil
$('header article nav a, aside#menu-moviles nav a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeOutExpo');
        event.preventDefault();
    });

    // Funciones de Abrir y Cerrar el Menú Responsive
    $('a#abrir-menu').click(function(){
        $('aside#menu-moviles').animate({
            right: 0
        },500,'easeOutExpo');

        $('a#abrir-menu').hide();
        $('a#cerrar-menu').show();

        event.preventDefault();
    });

    $('a#cerrar-menu, aside#menu-moviles nav a').click(function(){
        $('aside#menu-moviles').animate({
            right: -290
        },1000,'easeOutElastic');
        
        $('a#abrir-menu').show();
        $('a#cerrar-menu').hide();

        event.preventDefault();
    });


    //Función para detectar scroll abajo
   $(window).scroll(function(){
     if ($(this).scrollTop() > 10){
        $('header').removeClass('transparente');
        $('header').addClass('gris');

        
    } else {
        $('header').removeClass('gris');
        $('header').addClass('transparente');

    }

   });

   
/*funcion menú sticky*/
$(window).scroll(function(){
if ($(this).scrollTop()>30) {

    //cuando se baja el scroll
    $('header').removeClass('no-sticky');
    $('header').addClass ('sticky');
         
    } else { 
     
     //cuando vuelve el scroll a su valor inicial
    $('header').removeClass('sticky');
    $('header').addClass ('no-sticky');


 } 


  });

   /*activador slick slider*/
    $('.slick-inicio').slick({     
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay:true,
     arrows: true,
     dots:true,
     autoplaySpeed:1100,
     speed:500,
     fade:true,
     infinite:true

  

  });

});