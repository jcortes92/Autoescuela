/**
* @author Jorge Cortés
*/
// (function() {
var test = [];
var allData = []; //contenedor de contenedores de preguntas. Cada elemento será un array conteniendo una pregunta completa (con todos sus elementos)
var bolsaNumeros = [];
var aleatorios=[];
var contadorPreguntas = 0;
var respuestas=[]; //contenedor para las respuestas



//versión refactorizada
function mostrarPreguntas(){
	var y = contadorPreguntas;
	$("#preguntasMostradas").empty();

	for(var x = contadorPreguntas; x < y+3; x++){
		
		//Si la imagen es nula, no mostrarla.
		var img = test[contadorPreguntas][6];
		if(img!="no_image.png") img = '<img src="src/imagenes/'+ test[contadorPreguntas][6]+'"" style="float:right;" >';
		else img = "";

		$("#preguntasMostradas").append('<div class="preguntas"><br/>'+img+
		'<p class="pregunta"><span class="numPregunta">' + (contadorPreguntas+1).toString()+'.</span>'+test[contadorPreguntas][0] + '</p>' + 
		'<div class="respuesta"'+
		'<li><ol><input type="radio" name="'+contadorPreguntas+'" value="1" >a) ' + test[contadorPreguntas][1] + '</ol>'+
		'<ol><input type="radio"name="'+contadorPreguntas+'" value="2">b) ' + test[contadorPreguntas][2]+'</ol>'+
		'<ol><input type="radio"name="'+contadorPreguntas+'" value="3">c) ' + test[contadorPreguntas][3]+'</ol>'+
		'</li></div></div>');

		contadorPreguntas++;	
	}
}

function restaurarRespuestasOLD(){
	for(var x = contadorPreguntas; x < y+3; x++){

			switch (respuestas[contadorPreguntas]) {
				case undefined:{$("#preguntasMostradas").append('<div class="preguntas"><br/>'+img+
			'<p class="pregunta"><span class="numPregunta">' + (contadorPreguntas+1).toString()+'.</span>'+test[contadorPreguntas][0] + '</p>' + 
			'<div class="respuesta"'+
			'<li><ol><input type="radio" name="'+contadorPreguntas+'" value="1" >a) ' + test[contadorPreguntas][1] + '</ol>'+
			'<ol><input type="radio"name="'+contadorPreguntas+'" value="2">b) ' + test[contadorPreguntas][2]+'</ol>'+
			'<ol><input type="radio"name="'+contadorPreguntas+'" value="3">c) ' + test[contadorPreguntas][3]+'</ol>'+
			'</li></div></div>');}break;
				case 1: $("#preguntasMostradas").append('<div class="preguntas"><br/>'+img+
					'<p class="pregunta"><span class="numPregunta">' + (contadorPreguntas+1).toString()+'.</span>'+test[contadorPreguntas][0] + '</p>' + 
					'<div class="respuesta"'+
					'<li><ol><input type="radio" name="'+contadorPreguntas+'" value="1" checked="checked">a) ' + test[contadorPreguntas][1] + '</ol>'+
					'<ol><input type="radio"name="'+contadorPreguntas+'" value="2">b) ' + test[contadorPreguntas][2]+'</ol>'+
					'<ol><input type="radio"name="'+contadorPreguntas+'" value="3">c) ' + test[contadorPreguntas][3]+'</ol>'+
					'</li></div></div>');
					break;

				case 2: $("#preguntasMostradas").append('<div class="preguntas"><br/>'+img+
					'<p class="pregunta"><span class="numPregunta">' + (contadorPreguntas+1).toString()+'.</span>'+test[contadorPreguntas][0] + '</p>' + 
					'<div class="respuesta"'+
					'<li><ol><input type="radio" name="'+contadorPreguntas+'" value="1">a) ' + test[contadorPreguntas][1] + '</ol>'+
					'<ol><input type="radio"name="'+contadorPreguntas+'" value="2" checked="checked">b) ' + test[contadorPreguntas][2]+'</ol>'+
					'<ol><input type="radio"name="'+contadorPreguntas+'" value="3">c) ' + test[contadorPreguntas][3]+'</ol>'+
					'</li></div></div>');
					break;

				case 3: $("#preguntasMostradas").append('<div class="preguntas"><br/>'+img+
					'<p class="pregunta"><span class="numPregunta">' + (contadorPreguntas+1).toString()+'.</span>'+test[contadorPreguntas][0] + '</p>' + 
					'<div class="respuesta"'+
					'<li><ol><input type="radio" name="'+contadorPreguntas+'" value="1">a) ' + test[contadorPreguntas][1] + '</ol>'+
					'<ol><input type="radio"name="'+contadorPreguntas+'" value="2">b) ' + test[contadorPreguntas][2]+'</ol>'+
					'<ol><input type="radio"name="'+contadorPreguntas+'" value="3" checked="checked">c) ' + test[contadorPreguntas][3]+'</ol>'+
					'</li></div></div>');
					break;
			
		}
		contadorPreguntas++;		
	}
}
function setRespuestas(){
	var y = contadorPreguntas;
	var TEMPcontadorPreguntas = contadorPreguntas-3;

	for(var x = TEMPcontadorPreguntas; x < y; x++) {
		// $("input[type='radio'][name='"+TEMPcontadorPreguntas+"'][val='"+respuestas[TEMPcontadorPreguntas]+"']").prop("checked", true);
		var $radios = $('input:radio[name='+TEMPcontadorPreguntas+']');
		$radios.filter('[value='+respuestas[TEMPcontadorPreguntas]+']').attr("checked",true); //http://blog.balfes.net/2013/01/31/getting-and-setting-radio-button-values-with-jquery/
		TEMPcontadorPreguntas++;
	}
}



function getRespuestas(){
	var y = contadorPreguntas;
	var TEMPcontadorPreguntas = contadorPreguntas-3;

	for(var x = TEMPcontadorPreguntas; x <y; x++) {
		respuestas[TEMPcontadorPreguntas] = parseInt($("input[type='radio'][name='"+TEMPcontadorPreguntas+"']:checked").val());
		//respuestas[contadorRespuestas] = document.getElementById(contadorRespuestas+1).checked;
		TEMPcontadorPreguntas++;
	}
}




// //VERSIÓN ANTIGUA
// function mostrarSiguientes (){
// 	var y = contadorPreguntas;
// 	$("#preguntasMostradas").empty();
// 	for(var x = contadorPreguntas; x < y+3; x++){
// 		//Si la imagen es nula, no mostrarla.
// 		var img = test[contadorPreguntas][6];
// 		if(img!="no_image.png") img = '<img src="src/imagenes/'+ test[contadorPreguntas][6]+'"" style="float:right;" >';
// 		else img = "";

// 		//Se muestran las respuestas de 3 en 3.
// 		//Si la respuesta no ha sido marcada todavia, los radiobuttons estan desmarcados.
// 		if (respuestas[contadorPreguntas] == null) {
// 			$("#preguntasMostradas").append('<div class="preguntas"><br/>'+img+
// 			'<p class="pregunta"><span class="numPregunta">' + (contadorPreguntas+1).toString()+'.</span>'+test[contadorPreguntas][0] + '</p>' + 
// 			'<div class="respuesta"'+
// 			'<li><ol><input type="radio" name="'+contadorPreguntas+'" value="1" >a) ' + test[contadorPreguntas][1] + '</ol>'+
// 			'<ol><input type="radio"name="'+contadorPreguntas+'" value="2">b) ' + test[contadorPreguntas][2]+'</ol>'+
// 			'<ol><input type="radio"name="'+contadorPreguntas+'" value="3">c) ' + test[contadorPreguntas][3]+'</ol>'+
// 			'</li></div></div>');}
// 		//Si la respuesta ya ha sido marcada se muestra marcado el radiobutton correspondiente.
// 		else {
// 			switch (respuestas[contadorPreguntas]) {
// 				case 1: $("#preguntasMostradas").append('<div class="preguntas"><br/>'+img+
// 					'<p class="pregunta"><span class="numPregunta">' + (contadorPreguntas+1).toString()+'.</span>'+test[contadorPreguntas][0] + '</p>' + 
// 					'<div class="respuesta"'+
// 					'<li><ol><input type="radio" name="'+contadorPreguntas+'" value="1" checked="checked">a) ' + test[contadorPreguntas][1] + '</ol>'+
// 					'<ol><input type="radio"name="'+contadorPreguntas+'" value="2">b) ' + test[contadorPreguntas][2]+'</ol>'+
// 					'<ol><input type="radio"name="'+contadorPreguntas+'" value="3">c) ' + test[contadorPreguntas][3]+'</ol>'+
// 					'</li></div></div>');
// 					break;

// 				case 2: $("#preguntasMostradas").append('<div class="preguntas"><br/>'+img+
// 					'<p class="pregunta"><span class="numPregunta">' + (contadorPreguntas+1).toString()+'.</span>'+test[contadorPreguntas][0] + '</p>' + 
// 					'<div class="respuesta"'+
// 					'<li><ol><input type="radio" name="'+contadorPreguntas+'" value="1">a) ' + test[contadorPreguntas][1] + '</ol>'+
// 					'<ol><input type="radio"name="'+contadorPreguntas+'" value="2" checked="checked">b) ' + test[contadorPreguntas][2]+'</ol>'+
// 					'<ol><input type="radio"name="'+contadorPreguntas+'" value="3">c) ' + test[contadorPreguntas][3]+'</ol>'+
// 					'</li></div></div>');
// 					break;

// 				case 3: $("#preguntasMostradas").append('<div class="preguntas"><br/>'+img+
// 					'<p class="pregunta"><span class="numPregunta">' + (contadorPreguntas+1).toString()+'.</span>'+test[contadorPreguntas][0] + '</p>' + 
// 					'<div class="respuesta"'+
// 					'<li><ol><input type="radio" name="'+contadorPreguntas+'" value="1">a) ' + test[contadorPreguntas][1] + '</ol>'+
// 					'<ol><input type="radio"name="'+contadorPreguntas+'" value="2">b) ' + test[contadorPreguntas][2]+'</ol>'+
// 					'<ol><input type="radio"name="'+contadorPreguntas+'" value="3" checked="checked">c) ' + test[contadorPreguntas][3]+'</ol>'+
// 					'</li></div></div>');
// 					break;
// 			}
// 		}
// 		contadorPreguntas++;		
// 	}
// }

// //Mostrar preguntas hacia atrás, EN PROCESO...
// function mostrarAnteriores () {
// 	contadorPreguntas -= 6;
// 	var y = contadorPreguntas;	
// 	$("#preguntasMostradas").empty();
// 	for(var x = contadorPreguntas; x < y + 3; x++) {
// 		//Si la imagen es nula, no mostrarla.
// 		var img = test[contadorPreguntas][6];
// 		if(img!="no_image.png") img = '<img src="src/imagenes/'+ test[contadorPreguntas][6]+'"" style="float:right;" >';
// 		else img = "";

// 		//Se muestran las respuestas de 3 en 3.
// 		//Si la respuesta no ha sido marcada todavia, los radiobuttons estan desmarcados.
// 		if (respuestas[contadorPreguntas] == null) {
// 			$("#preguntasMostradas").append('<div class="preguntas"><br/>'+img+
// 			'<p class="pregunta"><span class="numPregunta">' + (contadorPreguntas+1).toString()+'.</span>'+test[contadorPreguntas][0] + '</p>' + 
// 			'<div class="respuesta"'+
// 			'<li><ol><input type="radio" name="'+contadorPreguntas+'" value="1" >a) ' + test[contadorPreguntas][1] + '</ol>'+
// 			'<ol><input type="radio"name="'+contadorPreguntas+'" value="2">b) ' + test[contadorPreguntas][2]+'</ol>'+
// 			'<ol><input type="radio"name="'+contadorPreguntas+'" value="3">c) ' + test[contadorPreguntas][3]+'</ol>'+
// 			'</li></div></div>');}
// 		//Si la respuesta ya ha sido marcada se muestra marcado el radiobutton correspondiente.
// 		else {
// 			switch (respuestas[contadorPreguntas]) {
// 				case 1: $("#preguntasMostradas").append('<div class="preguntas"><br/>'+img+
// 					'<p class="pregunta"><span class="numPregunta">' + (contadorPreguntas+1).toString()+'.</span>'+test[contadorPreguntas][0] + '</p>' + 
// 					'<div class="respuesta"'+
// 					'<li><ol><input type="radio" name="'+contadorPreguntas+'" value="1" checked="checked">a) ' + test[contadorPreguntas][1] + '</ol>'+
// 					'<ol><input type="radio"name="'+contadorPreguntas+'" value="2">b) ' + test[contadorPreguntas][2]+'</ol>'+
// 					'<ol><input type="radio"name="'+contadorPreguntas+'" value="3">c) ' + test[contadorPreguntas][3]+'</ol>'+
// 					'</li></div></div>');
// 					break;

// 				case 2: $("#preguntasMostradas").append('<div class="preguntas"><br/>'+img+
// 					'<p class="pregunta"><span class="numPregunta">' + (contadorPreguntas+1).toString()+'.</span>'+test[contadorPreguntas][0] + '</p>' + 
// 					'<div class="respuesta"'+
// 					'<li><ol><input type="radio" name="'+contadorPreguntas+'" value="1">a) ' + test[contadorPreguntas][1] + '</ol>'+
// 					'<ol><input type="radio"name="'+contadorPreguntas+'" value="2" checked="checked">b) ' + test[contadorPreguntas][2]+'</ol>'+
// 					'<ol><input type="radio"name="'+contadorPreguntas+'" value="3">c) ' + test[contadorPreguntas][3]+'</ol>'+
// 					'</li></div></div>');
// 					break;

// 				case 3: $("#preguntasMostradas").append('<div class="preguntas"><br/>'+img+
// 					'<p class="pregunta"><span class="numPregunta">' + (contadorPreguntas+1).toString()+'.</span>'+test[contadorPreguntas][0] + '</p>' + 
// 					'<div class="respuesta"'+
// 					'<li><ol><input type="radio" name="'+contadorPreguntas+'" value="1">a) ' + test[contadorPreguntas][1] + '</ol>'+
// 					'<ol><input type="radio"name="'+contadorPreguntas+'" value="2">b) ' + test[contadorPreguntas][2]+'</ol>'+
// 					'<ol><input type="radio"name="'+contadorPreguntas+'" value="3" checked="checked">c) ' + test[contadorPreguntas][3]+'</ol>'+
// 					'</li></div></div>');
// 					break;
// 			}
// 		}
// 		contadorPreguntas++;
// 	}
// }

// function almacenarRespuestasAdelante (){
// 	var y = contadorRespuestas;
// 	for(var x = contadorRespuestas; x < y+3; x++) {
// 		respuestas[contadorRespuestas] = $("input[type='radio'][name='"+contadorRespuestas+"']:checked").val();
// 		//respuestas[contadorRespuestas] = document.getElementById(contadorRespuestas+1).checked;
// 		contadorRespuestas++;
// 	}
// 	mostrarSiguientes();
// }

$(document).ready(function() {


	// $('#botonSiguiente').click(function (){
	// 	mostrarSiguientes();
	// });
	//VERSIÓN ANTIGUA
	// $('#botonSiguiente').click(almacenarRespuestasAdelante);
	// $('#botonAnterior').click(mostrarAnteriores);
//Nueva versión
$('#botonSiguiente').click(function(){
	getRespuestas();
	mostrarPreguntas();
	setRespuestas();

});
$('#botonAnterior').click(function(){
	getRespuestas();
	contadorPreguntas -= 6;
	mostrarPreguntas();
	setRespuestas();

});

	function parse(document) {
		$(document).find("PREGUNTA").each(function() {
		//contenedor de pregunta completa (item), con todos sus elementos.
		var item = [];

		//bucle que busca todas las componentes de cada item y las mete en un array
		$(this).find("*").each(function() {
			item.push($(this).text());
		});

		//mete ese array en la siguiente posisición del array allData
		allData.push(item);
		// console.log(item);
		// console.log(allData);
		});

		//SELECCIÓN ALEATORIA DE PREGUNTAS DE LA BASE DE DATOS
		for(var i=0;i<allData.length;i++){
		bolsaNumeros[i] = i; //aqui tenemos los 140 numeros posibles
		}
		for(var i=0;i<30;i++){
			aleatorios[i] = Math.floor((Math.random() * bolsaNumeros.length)+1);
			bolsaNumeros.splice(aleatorios[i],1);
		}
		for (var i =0;i<30;i++){
			test[i] = allData[aleatorios[i]]
		}		
		mostrarPreguntas();		
	}



	$.ajax({
	url : 'src/preguntas.xml', // name of file you want to parse
	dataType : "xml",
	success : parse,
	error : function() {
		alert("Error: Something went wrong");
	}
	});




});

