//Encuesta

var personas = [];
var cont = 0;
var contagiados = 0;

function miencuesta(nombres,documento,dirección,ciudad,tiene) {
		this.nombres=nombres;
		this.documento=documento;
		this.dirección=dirección;
		this.ciudad=ciudad;
		this.tiene = tieneCovid();
	}
	  
		function tieneCovid(){
			var cov = 0;
			if (document.getElementById ("si").checked){
				cov=1;
				contagiados++;
			}else if (document.getElementById("no").checked){
				cov=0;
			}
			return cov;			
	}


// Agregar información 
	  
function agregar(){
	var formulario = new miencuesta(document.getElementById("nid").value, document.getElementById("docid").value, document.getElementById("dirid").value,  document.getElementById("ciuid").value);
	
	personas[cont]= formulario;
	cont++;	
}

// Mostrar estadisticas

function estadisticas(){
	
	var porcentaje= (contagiados/cont)*100;
	var contag = "";
	
	for (var i =0; i < cont; i++){
		if (personas[i].tieneCovid = 1){
			contag += personas[i].nombres + "<br>";
		}
	}
	
	document.getElementById("e1").innerHTML = cont;
	document.getElementById("e2").innerHTML = contagiados;
	document.getElementById("e3").innerHTML = porcentaje + "%";
	
}
	
// Limpiar formulario 

function limpiar(){	
	document.getElementById("nid").value = "";
	document.getElementById("docid").value = "";
	document.getElementById("dirid").value = "";
	document.getElementById("ciuid").value = "";	
}

//Mostrar personas contagiadas por ciudad 

function ciudad(){
	var ordenar = [];
	var contar = 0;
	var rta = "";

// Buscar ciudad 

	for (i=0; i<personas.length;i++){
		if (personas[i].tieneCovid==1){
		if(personas[i].ciudad.toLowerCase() === document.getElementById("mostrarid").value.toLowerCase()){
			ordenar[contar] = personas[i];
			contar++;
			}
		}
	}
	
	for (i=0; i < ordenar.length; i++){
		rta = rta + "<br>" + ordenar[i].nombres;
	}
	
	document.getElementById("e4").innerHTML = rta;
}

	