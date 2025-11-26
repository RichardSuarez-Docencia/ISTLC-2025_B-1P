
console.log("Mi primer Hola mundo en Javascript")

let numeroUno = 8;
let numeroDos = 12;

let suma = numeroUno + numeroDos;
console.log(`La suma es ${suma}`)

let resta = numeroDos - numeroUno;
console.log(`La resta es ${resta}`)

let multiplicacion = numeroDos * numeroUno;
console.log(`La multiplicacion es ${multiplicacion}`)

let division = numeroDos / numeroUno;
console.log(`La division es ${division}`)


let nota = 3;
let estadoMateria = nota > 5 ? "Materia Aprobada" : "Reprobó la materia de lenguaje de frontend";
console.log(estadoMateria); 

let numeroCuatro = "500.60";
let segundoNumero = 100;
let sumar = parseFloat(numeroCuatro) + segundoNumero;

console.log(`El numero es ${sumar}`);


let edad = 25;
console.log(`La edad de Chantal ${edad.toString()}`);
console.log(typeof edad);
console.log(typeof edad.toString());


let promedio = 2;
let edadAlumno = 15;
if(promedio > 6){
    console.log("Usted ha aprobado la materia");
    if(edadAlumno > 18){
        console.log("Usted es mayor de edad");
    }else{
        console.log("El estudiante es menor de edad");
    }
}else{
    console.log("Lo siento, usted ha reprobado la materia");
    if(edadAlumno > 18){
        console.log("Usted es mayor de edad");
    }else{
        console.log("El estudiante es menor de edad");
    }
}


let diaSemana=48;

switch(diaSemana){
    case 1: console.log("Lunes");
    break;
    case 2: console.log("Martes");
    break;
    case 3: console.log("Miercoles");
    break;
    case 4: console.log("Jueves");
    break;
    case 5: console.log("Viernes");
    break;
    case 6: console.log("Sabado");
    break;
    case 7: console.log("Domingo");
    break;
    default: console.log("NO existe dicho numero de la semana que acabas de ingresar");
}

let numeros = [1,2,4,9,10,11];
let nombres = ['Chantal','Mantilla','Candelo','Kevin','Ordoñez','Jhon','Ramirez']
console.log(numeros); 

numeros.forEach(num => {
    console.log(`El numero es ${num}`);
});

nombres.forEach(nombre => {
    console.log(`El estudiante ${nombre} es muy aplicado`);    
});
