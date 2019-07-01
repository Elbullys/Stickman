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

	/*
	--------------------------------------
		CODIGO DE C# DEL MÉTODO DIBUJAR
	--------------------------------------
		public bool Dibujar(Graphics contextoDeDibujo)
        {
            //Crear una pluma con el color
            //definido para el objeto Persona
            Pen MiPluma = new Pen(this.Color);

            //Dibujar la cabeza
            contextoDeDibujo.DrawEllipse(MiPluma,
                this.X, this.Y,
                this.Ancho, this.Altura/4);

            //Dibujar el tronco
            contextoDeDibujo.DrawLine(MiPluma,
                this.X + this.Ancho / 2,
                this.Y + this.Altura / 4,
                this.X + this.Ancho / 2,
                this.Y + (3 * this.Altura) / 4);

            //Dibujar manos
            contextoDeDibujo.DrawLine(MiPluma,
                this.X,
                this.Y + this.Altura / 2,
                this.X + this.Ancho,
                this.Y + this.Altura / 2);

            //Dibujar pierna izquierda
            contextoDeDibujo.DrawLine(MiPluma,
                this.X + this.Ancho / 2,
                this.Y + (3 * this.Altura) / 4,
                this.X,
                this.Y + this.Altura);

            //Dibujar pierna derecha
            contextoDeDibujo.DrawLine(MiPluma,
                this.X + this.Ancho / 2,
                this.Y + (3 * this.Altura) / 4,
                this.X + this.Ancho,
                this.Y + this.Altura);

            //Escribir Nombre de la Persona
            contextoDeDibujo.DrawString(this.Nombre,
                new Font("Arial", 12),
                new SolidBrush(this.Color),
                this.X, this.Y - 20);

            return true;
        }
	*/
}