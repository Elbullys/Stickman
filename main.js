var arregloArboles;
var y_inicio = 10;
var objPersona1;

function main(){
	objPersona1 = new Persona("Néstor", 33, "blue", 100, 30, 50, 50);

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	var arregloPersonas; //Declaración
	arregloPersonas = new Array(5); //Creación
	for (var i = 0; i <= 5-1; i++) { //Inicialización
		arregloPersonas[i] = new Persona(
				"Persona"+i,
				20+i,
				"blue",
				100+i,50+i,
				10+(i*60),
				100
			);
	}

	arregloPersonas.forEach(
		function(element) {
	  		//element.Dibujar(context);
		}
	);

	//Declaración, Creación e Inicialización de un arreglo
	arregloArboles = new Array(
			new Arbol("blue", 120, 50, 50, y_inicio, 5, 1, 10, 1),
			new Arbol("black", 100, 50, 50+166, y_inicio, 5, 1, 20, 2),
			new Arbol("red", 80, 50, 50+332, y_inicio, 5, 1, 30, 3)
		);
	for (var i = arregloArboles.length - 1; i >= 0; i--) {
		arregloArboles[i].Dibujar(context);
	}

	var objPersona = new Persona("Iris",
							22,
							"red",
							100,
							50,
							10,10);
	//objPersona.Dibujar(context);

	var objArbol = new Arbol("green",
						140,
						50,
						100, 10,
						5,
						1);
	//objArbol.Dibujar(context);
}
function onkeyup_event(){
	//console.log(event.keyCode);
	switch(event.keyCode){
		case 37:
			console.log("Izquierda");
			objPersona1.Mover("Izquierda");
			break;
		case 38:
			console.log("Arriba");
			break;
		case 39:
			console.log("Derecha");
			objPersona1.Mover("Derecha");
			break;
		case 40:
			console.log("Abajo");
			break;
	}
}



var id1;
var t = 0;

function iniciarAnimacion(){
	id1 = setInterval(
			animacion,
			42
		);
}
function animacion(){
	
	
	context = myCanvas.getContext("2d");
	context.fillStyle = "white";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	arregloarboles();

	
	arregloarboles();
	if(objPersona1 != 'undefined')
		objPersona1.Dibujar(context);

	t+=42;
}

function arregloarboles()
{
	arregloArboles.forEach(
		function(element) {
	  		element.Dibujar(context);
	  		console.log(element.Color);
	  		console.log("X: " + element.X + ", Y: " + element.Y);	
		}
	);


}

function detenerAnimacion(){
	if(id1 != null)
		clearInterval(id1);
}