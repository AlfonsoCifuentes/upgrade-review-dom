//Iteración#1: Interacción con el DOM

/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let listaUL = document.createElement("ul");


document.body.appendChild(listaUL);

for (i=0; i<=(countries.length)-1; i++){
	let elementoLi = document.createElement("li");
    listaUL.appendChild(elementoLi)
    elementoLi.innerHTML=countries[i];
}

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let eliminame = document.getElementsByClassName("fn-remove-me");

for (i=0; i= eliminame.length; i++){
	document.body.removeChild(eliminame[0]);
}

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let getdivPrintHere = document.querySelectorAll(`[data-function="printHere"]`);
let divPrintHere = getdivPrintHere[0];



let listaUl13 = document.createElement("ul");
divPrintHere.appendChild(listaUl13);

for (i = 0; i < cars.length; i++) {
	let elementoLi13 = document.createElement("li");
	listaUl13.appendChild(elementoLi13);
    elementoLi13.innerHTML=cars[i];
}

/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

let listaDivs = document.createElement("ul");


document.body.appendChild(listaDivs);


	for (let elementoCountries2 of countries2){
		let liDeListaDivs = document.createElement ("li");
		let divLi = document.createElement ("div");
		let crearH4 = document.createElement ("h4");
		let crearImagen = document.createElement ("img");
		listaDivs.appendChild(liDeListaDivs);
		liDeListaDivs.appendChild(divLi);
		liDeListaDivs.setAttribute ("class", "divLiClass");
		divLi.appendChild(crearH4);
		divLi.appendChild(crearImagen);
		crearH4.innerHTML=elementoCountries2.title;
		crearImagen.setAttribute("src", elementoCountries2.imgUrl);
	}
		
	




/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista. */

let btnBorrarUltimo = document.createElement ("button");
btnBorrarUltimo.innerHTML="Borrar el último elemento de la lista";
btnBorrarUltimo.setAttribute ("id", "btn");
document.body.appendChild(btnBorrarUltimo);

let divLiGetter =  document.getElementsByClassName("divLiClass");

let clickBotonBorrarUltimo = function(event) {	
	divLiGetter[divLiGetter.length-1].remove();
 }

document.getElementById("btn").addEventListener("click", clickBotonBorrarUltimo);


/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html. */



for (i=0; i<=divLiGetter.length -1; i++){
	let btnBorrarActual = document.createElement ("button");
	btnBorrarActual.innerHTML="Borrar el elemento actual";
	btnBorrarActual.setAttribute ("class", "botonBorraActual");
	divLiGetter[i].appendChild(btnBorrarActual);
	let elementoActual = divLiGetter[i];

	let clickBotonBorrarActual = function(event) {			
		elementoActual.remove();
	 }
	
	btnBorrarActual.addEventListener("click", clickBotonBorrarActual);
}





