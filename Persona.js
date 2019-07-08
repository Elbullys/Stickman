class Persona{
	constructor(n, e, c, al, an, x, y){
		this.Nombre = n;
		this.Edad = e;
		this.Color = c;
		this.Altura = al;
		this.Ancho = an;
		this.X = x;
		this.Y = y;
	}

	Hablar(mensaje){
		alert(mensaje);
	}

	Dibujar(contextoDeDibujo){

		//Crear una pluma con el color
		contextoDeDibujo.strokeStyle = this.Color; // Stroke lines in blue

		//Dibujar la cabeza
		var radio = this.Ancho/2;
		contextoDeDibujo.beginPath();
        contextoDeDibujo.arc(this.X+radio, 
        					 this.Y+radio,
            				 radio,
            				 0,
            				 2*3.1416,
            				 true);
        contextoDeDibujo.stroke();

        //Dibujar el tronco
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X+radio,
        						this.Y+2*radio);
        contextoDeDibujo.lineTo(this.X+radio,
        						this.Y+3*radio);
        contextoDeDibujo.stroke();
	}

	Mover(direccion){
        var cuanto = 5;
        switch(direccion){
            case "Derecha":
                this.X += cuanto;
                break;
            case "Izquierda":
                this.X -= cuanto;
                break
        }
    }
}