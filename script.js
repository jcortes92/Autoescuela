
// (function() {
var test = []; //conjunto de 30 preguntas aleatorias
var allData = []; //contenedor de contenedores de preguntas. Cada elemento será un array conteniendo una pregunta completa (con todos sus elementos)
var bolsaNumeros = [];
var aleatorios=[];
var contadorPreguntas = 0;
var respuestas=[]; //contenedor para las respuestas
var pfalladas=0;
	var pcontestadas=0;
	var pacertadas=0;
	var presultado=0;




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
			'<div class="respuesta">'+
			'<ol><input type="radio" name="'+contadorPreguntas+'" value="1" >a) ' + test[contadorPreguntas][1] + '</ol>'+
			'<ol><input type="radio"name="'+contadorPreguntas+'" value="2">b) ' + test[contadorPreguntas][2]+'</ol>'+
			'<ol><input type="radio"name="'+contadorPreguntas+'" value="3">c) ' + test[contadorPreguntas][3]+'</ol>'+
			'</div></div>');

		contadorPreguntas++;	
	}
	visibilidadBotones();
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
		TEMPcontadorPreguntas++;
	}
}

function visibilidadBotones(){
	$("#botonCorregir").hide();
	$("#botonAnterior").hide();
	
	if(contadorPreguntas>3){
		if(contadorPreguntas>=29){
			$("#botonSiguiente").hide();
			$("#botonCorregir").show();
		} else {

		}
		$("#botonAnterior").show();
	}
	
}

function comprobarRespuestas(){
	for(var x = 0; x < 30; x++) {
		if (respuestas[x] != test[x][4]) {
			pfalladas++;

		}
		else {
			pacertadas++;
		}

		if (respuestas[x] != undefined) {
			pcontestadas++;
		}
	}
	if (pfalladas > 2) {
		presultado = "SUSPENDIDO"
	}
	else {
		presultado = "APROBADO"
	}}
	
function mostrarResultado() {

	$("#preguntasMostradas").empty();
	//Muestra la cabecera con la estadística.
	$("#preguntasMostradas").append('<div class="preguntas"><br/> ' +
				'<ol>' + 'Preguntas contestadas: ' + pcontestadas + '</ol>' +
				'<ol>' + 'Preguntas acertadas: ' + pacertadas + '</ol>' +
				'<ol>' + 'Preguntas falladas: ' + pfalladas + '</ol>' +
				'<ol>' + 'Resultado: ' + presultado + '</ol>')				
	//Muestra las preguntas.
	for (var x = 0; x < 30; x++) {

		//Si la imagen es nula, no mostrarla.
		var img = test[x][6];
		if(img!="no_image.png") img = '<img src="src/imagenes/'+ test[x][6]+'"" style="float:right;" >';
		else img = "";

		$("#preguntasMostradas").append('<div class="preguntas"><br/>'+img+
			'<p class="pregunta"><span class="numPregunta">' + (x+1).toString()+'.</span>'+test[x][0] + '</p>' + 
			'<div class="respuesta">'+
			'<ol><input type="radio" name="'+x+'" value="1" style="display:none">a) ' + test[x][1] + '</ol>'+
			'<ol><input type="radio"name="'+x+'" value="2" style="display:none">b) ' + test[x][2]+'</ol>'+
			'<ol><input type="radio"name="'+x+'" value="3" style="display:none">c) ' + test[x][3]+'</ol>'+
			'</div></div>');
	}

	//Muestra las respuestas correctas e incorrectas.
	for(var x = 0; x < 30; x++) {		

		var $radios = $('input:radio[name='+x+']');
		

		if(isNaN(respuestas[x])||(respuestas[x]=='undefined')){
			$radios.parent().addClass("error");



		} else
			if (respuestas[x] != test[x][4]) {			
				// var $radios = $('input:radio[name='+x+']');
				$radios.filter('[value='+respuestas[x]+']').parent().addClass("error");
			}	 else {
				$radios.filter('[value='+test[x][4]+']').parent().addClass("acierto");
		}
$radios.filter('[value='+test[x][4]+']').parent().removeClass("error").addClass("acierto");
			
	}
}

$(document).ready(function() {

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

	$('#botonCorregir').click(function(){
		getRespuestas();
		var boolSeguro = confirm("¿Estás seguro de que quieres corregir el test?");
		if (boolSeguro){
			var centinela;
			for(var x = 0; x<respuestas.length;x++){
				if (isNaN(respuestas[x])){
					centinela=false;
					alert("¡Te faltan preguntas por contestar!");
					break;
				}
			}
			if(centinela){comprobarRespuestas();
			mostrarResultado();}
			
		}
		
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

