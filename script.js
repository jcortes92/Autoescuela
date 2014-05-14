/**
* @author Jorge Cortés
*/
// (function() {
	var titles = [];
	var test = [];
var allData = []; //contenedor de contenedores de preguntas. Cada elemento será un array conteniendo una pregunta completa (con todos sus elementos)
var bolsaNumeros = [];
var aleatorios=[];
var contadorPreguntas = 0;
var respuestas=[];

function mostrarSiguientes (){
	var y = contadorPreguntas;
	$("#preguntasMostradas").empty();
	for(var x = contadorPreguntas; x < y+3; x++){
		//Si la imagen es nula, no mostrarla.
		var img = test[contadorPreguntas][6];
		if(img!="no_image.png") img = '<img src="src/imagenes/'+ test[contadorPreguntas][6]+'"" style="float:right;" >';
		else img = "";

		//Pasar de mostrar todas a mostrarlas en paquetes de tres, reemplazando las que haya en pantalla.
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

$(document).ready(function() {


// $('#botonSiguiente').click(function (){
// 	mostrarSiguientes();
// });
$('#botonSiguiente').click(mostrarSiguientes);



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

//console.log(allData);
// for (contadorPreguntas; contadorPreguntas < 3; contadorPreguntas++) {
// 	// for (var y = 0; y < test[0].length; y++) {
// 	// 	//Comprobación de todas las componentes del array
// 	// 	//console.log("allData[" + x + "][" + y + "]=" + allData[x][y]);
// 	// }

// 	//Si la imagen es nula, no mostrarla.
// 	var img = test[contadorPreguntas][6];
// 	if(img!="no_image.png") img = '<img src="src/imagenes/'+ test[contadorPreguntas][6]+'"" style="float:right;" >';
// 	else img = "";

// 	//Pasar de mostrar todas a mostrarlas en paquetes de tres, reemplazando las que haya en pantalla.
// 	$("#preguntasMostradas").append('<div class="preguntas"><br/>'+img+
// 		'<p class="pregunta">' + (contadorPreguntas+1).toString()+'. '+test[contadorPreguntas][0] + '</p>' + 
// 		'<div class="respuesta"'+
// 		'<li><ol><input type="radio" name="'+contadorPreguntas+'" value="1" >a) ' + test[contadorPreguntas][1] + '</ol>'+
// 	'<ol><input type="radio"name="'+contadorPreguntas+'" value="2">b) ' + test[contadorPreguntas][2]+'</ol>'+
// 	'<ol><input type="radio"name="'+contadorPreguntas+'" value="3">c) ' + test[contadorPreguntas][3]+'</ol>'+
// 	'</li></div></div>');

mostrarSiguientes();


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
// })();
