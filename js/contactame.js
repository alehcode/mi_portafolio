window.addEventListener("load", function(){
	var ico = document.getElementById("ico");
	var contacto = document.getElementById("conta");
	var icodos = document.getElementById("icodos");
	var contados = document.getElementById("contados");
	var icotres = document.getElementById("icotres");
	var contatres = document.getElementById("contatres");
	var icocuatro = document.getElementById("icocuatro");
	var contacuatro = document.getElementById("contacuatro");
	

	ico.addEventListener("mouseover",function(){
		contacto.classList.remove("oculto");
	});
		ico.addEventListener("mouseout",function(){
		contacto.classList.add("oculto");
	});
	icodos.addEventListener("mouseover",function(){
		contados.classList.remove("oculto");
	});
		icodos.addEventListener("mouseout",function(){
		contados.classList.add("oculto");
	});		
	icotres.addEventListener("mouseover",function(){
		contatres.classList.remove("oculto");
	});
		icotres.addEventListener("mouseout",function(){
		contatres.classList.add("oculto");
	});	
	icocuatro.addEventListener("mouseover",function(){
		contacuatro.classList.remove("oculto");
	});
		icocuatro.addEventListener("mouseout",function(){
		contacuatro.classList.add("oculto");
	});		
});
