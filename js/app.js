

function audio(e){
	var reproducir = new Audio();
	reproducir.src = e;
	reproducir.play();
}
window.addEventListener("load", function(){
	document.getElementById("uno").addEventListener("mouseover", function(){
		audio("sonds/sol.mp3");
	},false);
	document.getElementById("dos").addEventListener("mouseover", function(){
		audio("sonds/miTres.mp3");
	},false);
	document.getElementById("tres").addEventListener("mouseover", function(){
		audio("sonds/si.mp3");
	},false);
	document.getElementById("cuatro").addEventListener("mouseover", function(){
		audio("sonds/re.mp3");
	},false);
	document.getElementById("cinco").addEventListener("mouseover", function(){
		audio("sonds/fa.mp3");
	},false);
	document.getElementById("seis").addEventListener("mouseover", function(){
		audio("sonds/doUno.mp3");
	},false);
	document.getElementById("siete").addEventListener("mouseover", function(){
		audio("sonds/solCinco.mp3");
	},false);
	document.getElementById("ocho").addEventListener("mouseover", function(){
		audio("sonds/faCuatro.mp3");
	},false);
	document.getElementById("nueve").addEventListener("mouseover", function(){
		audio("sonds/do.mp3");
	},false);
	document.getElementById("diez").addEventListener("mouseover", function(){
		audio("sonds/la.mp3");
	},false);
	document.getElementById("once").addEventListener("mouseover", function(){
		audio("sonds/mi.mp3");
	},false);
	document.getElementById("doce").addEventListener("mouseover", function(){
		audio("sonds/reDos.mp3");
	},false);
},false);	

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

var texto = "El cambio es necesario para adaptarse a las necesidades de un mundo tan dinámico";
// 100 es el intervalo de minisegundos en el que se escribirá cada letra.
maquina("maquinas",texto,60);



   