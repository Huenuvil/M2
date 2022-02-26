let numA;
let numB;
let numR;

function loescrito(){
	let resultado = document.getElementById("resultado");
	let siete = document.getElementById("siete");
	let ocho = document.getElementById("ocho");
	let nueve = document.getElementById("nueve");
	let suma = document.getElementById("suma");
	let cuatro = document.getElementById("cuatro");
	let cinco = document.getElementById("cinco");
	let seis = document.getElementById("seis");
	let resta = document.getElementById("resta");
	let tres = document.getElementById("tres");
	let dos = document.getElementById("dos");
	let uno = document.getElementById("uno");
	let multiplicacion = document.getElementById("multiplicacion")
	let reset = document.getElementById("reset");
	let borrar= document.getElementById("borrar");
	let cero = document.getElementById("cero");
	let igual = document.getElementById("igual");
	let division = document.getElementById("division");
	let resultadoanterior = null;

	uno.onclick = function(e){
		resultado.textContent = resultado.textContent + "1";
	}
	dos.onclick = function(e){
		resultado.textContent = resultado.textContent + "2";
	}
	tres.onclick = function(e){
		resultado.textContent = resultado.textContent + "3";
	}
	cuatro.onclick = function(e){
		resultado.textContent = resultado.textContent + "4";
	}
	cinco.onclick = function(e){
		resultado.textContent = resultado.textContent + "5";
	}
	seis.onclick = function(e){
		resultado.textContent = resultado.textContent + "6";
	}
	siete.onclick = function(e){
		resultado.textContent = resultado.textContent + "7";
	}
	ocho.onclick = function(e){
		resultado.textContent = resultado.textContent + "8";
	}
	nueve.onclick = function(e){
		resultado.textContent = resultado.textContent + "9";
	}
	cero.onclick = function(e){
		resultado.textContent = resultado.textContent + "0";
	}
	reset.onclick = function(e){
		resetear();
	}
	suma.onclick = function(e){
		resultado.textContent = resultado.textContent + "+";
		numR = "+";
	}
	resta.onclick = function(e){
		resultado.textContent = resultado.textContent + "-";
		numR = "-";
	}
	multiplicacion.onclick = function(e){
		resultado.textContent = resultado.textContent + "*";
		numR = "*";
	}
	division.onclick = function(e){
		resultado.textContent = resultado.textContent + "/";
		numR = "/";
	}

	borrar.onclick = function(e){
		resultado.textContent= resultado.textContent.substring(0,resultado.textContent.length-1)

	}

	igual.onclick = function(e){
		numB = resultado.textContent;
		resolver();
	}

/* function limpiar(){
	resultado.textContent = "";
} */
function resetear(){
	resultado.textContent = "";
	numA = 0;
	numB = 0;
	numR = "";
}

function resolver(){
	let resultadotemporal=null;
	let res = eval (resultado.textContent);
	if (resultadoanterior){
		switch(numR){
			case "+":
				resultadotemporal = resultadoanterior+res; 
				break;
			case "-":
				resultadotemporal = resultadoanterior-res; 
				break;
			case "/":
					resultadotemporal = resultadoanterior/res; 
					break;
					case "*":
						resultadotemporal = resultadoanterior*res; 
						break;
	
			}
	}
	else{
		resultadotemporal = res;	
	}
	resultado.textContent = resultadotemporal;
	resultadoanterior = resultadotemporal;

	resetear();
	resultado.textContent = res;
}
}