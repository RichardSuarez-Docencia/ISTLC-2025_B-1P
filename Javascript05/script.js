
/*console.log("Mi primer Hola Mundo desde Javascript a Html");

let titulo = document.getElementById("titulo");
console.log(titulo.innerHTML);

let parrafo = document.getElementById("parrafo");
console.log(parrafo.innerHTML);

titulo.innerHTML = "El mejor titulo del mundo";
console.log(titulo.innerHTML);*/

/*let titulos = document.getElementsByTagName("h1");
console.log(`No de titulos: ${titulos.length}`);
//console.log(titulos.item(1).innerHTML);
for (let element of titulos ) {
    console.log(element.innerHTML);
}
console.log("FOREACH");

Array.from(titulos).forEach(element => {
    console.log(element.innerHTML);
});*/

/*let elementosPorClaseCss = document.getElementsByClassName("azul");
console.log(`No de Clase de css: ${elementosPorClaseCss.length}`);
for (let element of elementosPorClaseCss ) {
    console.log(element.innerHTML);
}*/


let elementoQuerySelector = document.querySelectorAll("h2.azul");
console.log(`No de Clase de css: ${elementoQuerySelector.length}`);
for (let element of elementoQuerySelector) {
    console.log(element.innerHTML);
}