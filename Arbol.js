class Arbol{
	constructor(c, al, an, x, y, rr, h, vel){
		this.Color = c;
		this.Altura = al;
		this.Ancho = an;
		this.X = x;
		this.Y = y;
        var radio = this.Ancho/2;
        this.RadioCopa = radio;
        this.RadioRueda = rr;
        this.DistanciaCP = h;
        this.Velocidad = vel;
	}

	Dibujar(contextoDeDibujo){

		//Crear una pluma con el color
		contextoDeDibujo.strokeStyle = this.Color; // Stroke lines in blue
        contextoDeDibujo.fillStyle = "pink";

        //Dibujar un poligono irregular
        /*
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X,this.Y+100);
        contextoDeDibujo.lineTo(this.X+10,this.Y+140);
        contextoDeDibujo.lineTo(this.X-20,this.Y+170);
        contextoDeDibujo.lineTo(this.X-10,this.Y+110);
        //contextoDeDibujo.stroke();
        contextoDeDibujo.fill();
        contextoDeDibujo.closePath();
        */

        //Dibujar el tronco del arbol
        contextoDeDibujo.beginPath();
        contextoDeDibujo.fillStyle = "brown";
        var xc = this.X + this.RadioCopa;
        var yc = this.Y + this.RadioCopa;

        var x_esi = xc - (1/2)*this.RadioCopa;
        var y_esi = yc + (3/4)*this.RadioCopa;

        var ancho_rect = this.RadioCopa;;
        var altura_rect = this.Altura - (7/4)*this.RadioCopa;

        contextoDeDibujo.fillRect(x_esi,y_esi,ancho_rect,altura_rect);

        contextoDeDibujo.fill();

        //Dibujar la copa del árbol
        contextoDeDibujo.beginPath();
        var xa = 0;
        var ya = 0;
        var xi = 0;
        var yi = 0;
        var isPrimerPunto = true;
        contextoDeDibujo.fillStyle = this.Color;

		for (var alfa = 0; alfa <= 2*Math.PI; alfa=alfa+0.01) {
            xi = xc + ((this.RadioCopa+this.RadioRueda)*Math.sin(alfa))-(this.RadioRueda*Math.sin(alfa*(1+(this.RadioCopa/this.RadioRueda))));
            yi = yc + ((this.RadioCopa+this.RadioRueda)*Math.cos(alfa))-(this.RadioRueda*Math.cos(alfa*(1+(this.RadioCopa/this.RadioRueda))));
            if(!isPrimerPunto){
                //Trazar línea
                //contextoDeDibujo.moveTo(xa, ya);
                contextoDeDibujo.lineTo(xi, yi);
            }
            else
                contextoDeDibujo.moveTo(xi, yi);
            isPrimerPunto=false;
            xa = xi;
            ya = yi;
        }
        contextoDeDibujo.stroke();
        contextoDeDibujo.fill();
        contextoDeDibujo.closePath();

        //Dibujar el tronco
        /*
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X+radio,
        						this.Y+2*radio);
        contextoDeDibujo.lineTo(this.X+radio,
        						this.Y+3*radio);
        contextoDeDibujo.stroke();
        */
	}

	
}