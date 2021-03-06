//Declaración de variables
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
var contadorTest=0;
var contadorTestAprobados=0;

//Inicialización de respuestas[] para hacer pruebas
// for(var x= 0; x<30;x++){
// 	respuestas[x]=1;
// }
//Mensaje de bienvenida
alert("Este test consta de 30 preguntas. Para aprobar, no puedes cometer más de TRES errores.  \n ¡Buena suerte!");

function mostrarPreguntas(){
	var y = contadorPreguntas;
	$("#preguntasMostradas").empty();

	// for(var x = contadorPreguntas; x < y+3; x++){
		for(contadorPreguntas; contadorPreguntas < y+3; contadorPreguntas++){
		
		img = esImagen(test[contadorPreguntas][6]);
		$("#preguntasMostradas").append('<div class="preguntas">'+img+
			'<p class="pregunta"><span class="numPregunta">' + (contadorPreguntas+1).toString()+'. </span>'+test[contadorPreguntas][0] + '</p>' + 
			'<div class="respuesta">'+ //Seleccionar radio button cuando se haga click en el texto que le siga http://stackoverflow.com/questions/7863251/clicking-the-text-to-select-corresponding-radio-button
			'<ol><input type="radio" id="optionRadio'+contadorPreguntas +'" name="'+contadorPreguntas+'" value="1"><label for="optionRadio'+contadorPreguntas+'">a) '+ test[contadorPreguntas][1]+'</label></ol>'+
			'<ol><input type="radio" id="optionRadio'+contadorPreguntas+1 +'" name="'+contadorPreguntas+'" value="2"><label for="optionRadio'+contadorPreguntas+1+'">b) '+ test[contadorPreguntas][2]+'</label></ol>'+
			'<ol><input type="radio" id="optionRadio'+contadorPreguntas+2 +'" name="'+contadorPreguntas+'" value="3"><label for="optionRadio'+contadorPreguntas+2+'">c) '+ test[contadorPreguntas][3]+'</label></ol>'+
			'</div></div>');
		// contadorPreguntas++;	
	}

	visibilidadBotones();
}

function getRespuestas(){ //Guardar los valores de los radio buttons marcados en array respuestas[]
	var y = contadorPreguntas;
	var TEMPcontadorPreguntas = contadorPreguntas-3;

	for(var x = TEMPcontadorPreguntas; x <y; x++) {
		respuestas[TEMPcontadorPreguntas] = parseInt($("input[type='radio'][name='"+TEMPcontadorPreguntas+"']:checked").val());
		TEMPcontadorPreguntas++;
	}
}

function setRespuestas(){ //recupera los valores de respuestas[] y restaura los radio buttons:checked
	var y = contadorPreguntas;
	var TEMPcontadorPreguntas = contadorPreguntas-3;

	for(var x = TEMPcontadorPreguntas; x < y; x++) {
		var $radios = $('input:radio[name='+TEMPcontadorPreguntas+']');
		$radios.filter('[value='+respuestas[TEMPcontadorPreguntas]+']').attr("checked",true); //http://blog.balfes.net/2013/01/31/getting-and-setting-radio-button-values-with-jquery/
		TEMPcontadorPreguntas++;
	}
}



function visibilidadBotones(){
	$("#botonSiguiente").show();
	$("#botonAnterior").hide();
	$("#botonNuevoTest").hide();
	$("#botonCorregir").hide();
	
	if(contadorPreguntas > 3){
		$("#botonAnterior").show();
	}
	
	if(contadorPreguntas == 30){
		$("#botonSiguiente").hide();
		$("#botonCorregir").show();
	}

	if(contadorPreguntas > 30){
		$("#botonNuevoTest").show();
		$("#botonSiguiente").hide();
		$("#botonAnterior").hide();
	}		
}

function comprobarRespuestas(){
	contadorPreguntas++;
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
	if (pfalladas > 3) {
		presultado = "SUSPENDIDO"
		//Suma 1 a tests realizados
		contadorTest++;
		$("#realizadosTotal").empty();
		$("#realizadosTotal").append(contadorTest);
	}
	else {
		presultado = "APROBADO"		
		//Suma 1 a tests realizados
		contadorTest++;
		$("#realizadosTotal").empty();
		$("#realizadosTotal").append(contadorTest);
		contadorTestAprobados++;
		$("#aprobadosTotal").empty();
		$("#aprobadosTotal").append(contadorTestAprobados);
	}
}

	

function mostrarResultado() {

	$("#preguntasMostradas").empty();
	//Muestra la cabecera con la estadística.
	$("#contenido").prepend('<div id="estadistica">' +
				'<ol>' + 'Preguntas acertadas: ' + pacertadas + '</ol>' +
				'<ol>' + 'Preguntas falladas: ' + pfalladas + '</ol>' +
				'<ol>' + 'Resultado: ' + presultado + '</ol></div>')				
	//Muestra las preguntas.
	for (var x = 0; x < 30; x++) {

		img = esImagen(test[x][6]);
		$("#preguntasMostradas").append('<div class="preguntas">'+img+
			'<p class="pregunta"><span class="numPregunta">' + (x+1).toString()+'. </span>'+test[x][0] + '</p>' + 
			'<div class="respuesta">'+
			'<ol><span><input type="radio" name="'+x+'" value="1" style="display:none">a) ' + test[x][1] + '</span></ol>'+
			'<ol><span><input type="radio"name="'+x+'" value="2" style="display:none">b) ' + test[x][2]+'</span></ol>'+
			'<ol><span><input type="radio"name="'+x+'" value="3" style="display:none">c) ' + test[x][3]+'</span></ol>'+
			'</div></div>');
	}

	//Marca las respuestas correctas e incorrectas.
	for(var x = 0; x < 30; x++) {		

		var $radios = $('input:radio[name='+x+']');

		$radios.filter('[value='+test[x][4]+']').parent().addClass("acierto");

		if (respuestas[x] != test[x][4]) {
			$radios.filter('[value='+respuestas[x]+']').parent().addClass("error");
		}	
	}
}
function esImagen(imagen){ //Si la imagen es nula, no mostrarla.
		if(imagen!="no_image.png") return imagen = '<img src="src/imagenesPreguntas/'+ imagen +'"" style="float:right;" >';
		else return imagen = "";
		
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
			var centinela = true;
			for(var x = 0; x<respuestas.length;x++){
				if (isNaN(respuestas[x])){
					centinela=false;
					alert("¡Te faltan preguntas por contestar!");
					break;
				}
				else {
					centinela=true;
				}
			}			
			if(centinela) {				
				comprobarRespuestas();
				if (presultado == "APROBADO") {
					alert("¡Felicidades! Has aprobado, sigue así.")
				}
				else {
					alert("Lo siento, has suspendido. No te desanimes y sigue intentándolo ;-)")
				}
				visibilidadBotones();				
				mostrarResultado();
			}			
		}
	});

	$('#botonNuevoTest').click(function(){
		contadorPreguntas = 0;
		cargarPreguntas();
	});

	$.ajax({
		url : 'src/preguntas.xml', // nombre del archivo que se quiere parsear
		dataType : "xml",
		success : parse,
		error : function() {
			alert("Error: Algo ha ido mal...");
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

			//mete ese array en la siguiente posisición del array allData[]
			allData.push(item);

			console.log(item);
			
		});
		console.log(allData);
		cargarPreguntasAleatorias();
	}

	function cargarPreguntasAleatorias() {

			//SELECCIÓN ALEATORIA DE PREGUNTAS DE LA BASE DE DATOS
			for(var i=0;i<allData.length;i++){
				bolsaNumeros[i] = i; //aqui tenemos los 140 numeros posibles (posiciones de las 140 preguntas del xml)
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



});

