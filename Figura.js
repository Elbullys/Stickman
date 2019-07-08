class Figura{
	constructor(id, x, y, altura, ancho, color){
		this._Id = id;
		this._X = x;
		this._Y = y;
		this._Altura = altura;
		this._Ancho = ancho;
		this._Color = color;
	}

	set Id (Id) { this._Id = Id }
	get Id () { return this._Id }
	set X (X) { this._X = X }
	get X () { return this._X }
	set Y (Y) { this._Y = Y }
	get Y () { return this._Y }
	set Altura (Altura) { this._Altura = Altura }
	get Altura () { return this._Altura }
	set Ancho (Ancho) { this._Ancho = Ancho }
	get Ancho () { return this._Ancho }
	set Color (Color) { this._Color = Color }
	get Color () { return this._Color }

	Dibujar(contextoDeDibujo){
		//Crear una pluma con el color
		contextoDeDibujo.strokeStyle = this.Color; // Stroke lines in blue

		//Dibujar el tronco del arbol
        contextoDeDibujo.beginPath();
        contextoDeDibujo.rect(this.X, this.Y, this.Ancho, this.Altura);
        contextoDeDibujo.stroke();
	}
}