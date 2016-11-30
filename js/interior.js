 $(document).ready(function(){
      $('.carousel').carousel();
    });

function maquina(contenedor,texto,intervalo){
   // Calculamos la longitud del texto
   longitud = texto.length;
   // Obtenemos referencia del div donde se va a alojar el texto.
   cnt = document.getElementById("maquinas");
   var i=0;
   // Creamos el timer
   timer = setInterval(function(){
      // Vamos añadiendo letra por letra y la _ al final.
      cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "_";
      // Si hemos llegado al final del texto..
      if(i >= longitud){
         // Salimos del Timer y quitamos la barra baja (_)
         clearInterval(timer);
         cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
         return true;
      } else {
         // En caso contrario.. seguimos
         i++;
      }},intervalo);
};

var texto = "Hola mi nombre es Alexandra López, tengo 26 años, actualmente soy estudiante de laboratoria encaminada a convertirme en una desarrolladora front-end, tengo muchas ganas de seguir aprendiendo sobre el mundo digital y la programación, en mis ratos libres me gusta tocar el piano y tambien me gusta diseñar, me ayuda mucho para desestresarme.";
// 100 es el intervalo de minisegundos en el que se escribirá cada letra.
maquina("maquinas",texto,40); 



