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