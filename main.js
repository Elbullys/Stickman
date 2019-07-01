var arregloArboles;
var y_inicio = 10;

function crearPersona(){

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
			new Arbol("blue", 120, 50, 50, y_inicio, 5, 1, 10),
			new Arbol("black", 100, 50, 50+166, y_inicio, 5, 1, 20),
			new Arbol("red", 80, 50, 50+332, y_inicio, 5, 1, 30)
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

function ordenarArbolesTamaño(){

	var n = arregloArboles.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arregloArboles[j].Altura > arregloArboles[j+1].Altura){
				//Intercambio
				aux = arregloArboles[j];
				aux_x_j 	= arregloArboles[j].X;
				aux_y_j = arregloArboles[j].Y;
				aux_x_j_1 = arregloArboles[j+1].X;
				aux_y_j_1 = arregloArboles[j+1].Y;
				
				arregloArboles[j] = arregloArboles[j+1];
				arregloArboles[j+1] = aux;

				arregloArboles[j].X = aux_x_j;
				arregloArboles[j].Y = aux_y_j;

				arregloArboles[j+1].X = aux_x_j_1;
				arregloArboles[j+1].Y = aux_y_j_1;
			}
		}
	}

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle = "#fff";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	for (var i = arregloArboles.length - 1; i >= 0; i--) {
		arregloArboles[i].Dibujar(context);
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
	
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.fillStyle = "white";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	arregloArboles.forEach(
		function(element) {
	  		element.Y = y_inicio + (element.Velocidad*(t/1000));
		}
	);

	arregloArboles.forEach(
		function(element) {
	  		element.Dibujar(context);
	  		console.log(element.Color);
	  		console.log("X: " + element.X + ", Y: " + element.Y);	
		}
	);

	t+=42;
}

function detenerAnimacion(){
	if(id1 != null)
		clearInterval(id1);
}