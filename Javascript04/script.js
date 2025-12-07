
console.log("Funciones en Javascript");

console.log(sumar(5,5));

function sumar(num1,num2=8){
    return num1 + num2
}

console.log(sumar(5,5));


//console.log(suma(4,3));
//Funciones expresada
 const suma = function(a,b){
    return a + b;
 }

 console.log(suma(4,3));

 //Funcion flecha

 const multiplicacion = (d,c) => {
    return d * c
 }
 console.log(multiplicacion(8,8));

 const division = (x,y) => x/y;
  console.log(division(8,8));



  const persona = {
    nombre : 'Julian',
    saludarNormal: function(){
        console.log("Hola a todos soy"+ this.nombre);
    },

    saludarFlecha: () => {
        console.log("Hola a todos soy "+ this.nombre)
    }
  }
  console.log(persona.saludarNormal());
  console.log(persona.saludarFlecha());

/*
 setTimeout(() => {
    console.log("Hola a todos despues de 9 segundos");
 }, 9000);

  setTimeout(function(){
    console.log("Hola a todos despues de 9 segundos");
 }, 9000);*/



 class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombresCompletos(){
        return this._nombre + ' ' + this._apellido;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

 }

 let person1 = new Persona('Pepito','Perez');
 console.log(person1.nombresCompletos);
 person1.nombre = "Carlos";
 console.log(person1)
 let persona2 = new Persona('Jhon','Gonzales');
 console.log(persona2);





 let promesa = new Promise((resolve,reject) => {
    let todoBien = false;
    if(todoBien){
        resolve("Todo ha salido bien");
    }else{
        reject("Lo sentimos no salio nada bien");
    }
 });

 promesa.then(respuesta => console.log(respuesta)).catch(error => console.log(error))