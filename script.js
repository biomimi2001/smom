M.AutoInit();

 function changeClass(){
   if ( document.getElementById("menu_hamburger").classList.contains('hidden') ) {
     document.getElementById("menu_hamburger").classList.remove('hidden');
     document.getElementById("menu_hamburger").classList.add('showed');
   }

   else {
     document.getElementById("menu_hamburger").classList.remove('showed');
     document.getElementById("menu_hamburger").classList.add('hidden');
   }
 }

 window.onload = function(){
       document.getElementById("bouton_hamburger").addEventListener( 'click', changeClass);
   }



   document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
  });


  /****second carrousel */
  
  var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
  });

  