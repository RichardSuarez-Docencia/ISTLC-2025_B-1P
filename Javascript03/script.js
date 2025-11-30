
let arregloAutos = ['BMW','Toyota','Lada','Chevrolet','Mazda'];

console.log(arregloAutos);
console.log(arregloAutos[0]);
console.log(arregloAutos[1]);
console.log(arregloAutos[2]);
console.log(arregloAutos[3]);
console.log(arregloAutos[4]);

arregloAutos.push('VolksWagen');
arregloAutos.push('Citroen');
console.log(arregloAutos);

arregloAutos.pop();
console.log(arregloAutos);

arregloAutos.shift();
console.log(arregloAutos);

arregloAutos.splice(2,2);
console.log(arregloAutos);

arregloAutos.splice(1,0,'Chery');
console.log(arregloAutos);

arregloAutos.forEach(element => {
    console.log(`El vehiculo es ${element}`);
});

let arregloNumerico = [1,2,3,4,5]
console.log(arregloNumerico);
console.log(arregloNumerico[0]);
console.log(arregloNumerico[1]);
console.log(arregloNumerico[2]);
console.log(arregloNumerico[3]);
console.log(arregloNumerico[4]);

arregloNumerico.push(6);
console.log(arregloNumerico);

arregloNumerico.pop();
console.log(arregloNumerico);

arregloNumerico.shift();
console.log(arregloNumerico);

arregloNumerico.splice(1,1);
console.log(arregloNumerico);

arregloNumerico.splice(1,0,7);
console.log(arregloNumerico);

arregloNumerico.forEach(element => {
    console.log(`El Numero es ${element}`);
});

let estudiante = {
    nombre : '',
    apellido : '',
    edad : 0,
    soltero : false
}

estudiante.nombre = 'Juan';
estudiante.apellido = 'Perez';
estudiante.edad = 25;
estudiante.soltero = true;

console.log(estudiante);
console.log(estudiante.nombre);
console.log(estudiante.apellido);
console.log(estudiante.edad);
console.log(estudiante.soltero);

let arregloEstudiantes = [
   { id:0, nombre : 'Emrick', apellido : 'Candelo', edad : 20, soltero : true },
   { id: 1, nombre : 'Carlos', apellido : 'Ramirez', edad : 24, soltero : false },
   { id: 2, nombre : 'Kevin', apellido : 'Lozano', edad : 25, soltero : false },
   { id: 3, nombre : 'Carlos', apellido : 'Gonzales', edad : 24, soltero : false },
   { id: 4, nombre : 'Carlos', apellido : 'Mantilla', edad : 26, soltero : true },
   { id: 5, nombre : 'Alfredo', apellido : 'Ordoñez', edad : 28, soltero : false },
   { id: 6,  nombre : 'Chantal', apellido : 'Peñafiel', edad : 27, soltero : true },
];

console.log(arregloEstudiantes);
console.log(arregloEstudiantes[6]);
console.log(arregloEstudiantes[6].nombre);
console.log(arregloEstudiantes[6].apellido);
console.log(arregloEstudiantes[6].edad);
console.log(arregloEstudiantes[6].soltero);

let estudiantePepe = { nombre : 'Pepe', apellido : 'Noboa', edad : 29, soltero : false }
arregloEstudiantes.push(estudiantePepe);
console.log(arregloEstudiantes);

arregloEstudiantes.pop();
console.log(arregloEstudiantes);

arregloEstudiantes.shift();
console.log(arregloEstudiantes);

arregloEstudiantes.splice(0,1);
console.log(arregloEstudiantes);

arregloEstudiantes.splice(1,0,estudiantePepe);
console.log(arregloEstudiantes);

let arr = [1, 2, 3]; 
let newArr = arr.slice(1);
console.log(newArr);

console.log(arregloEstudiantes);
arregloEstudiantes.forEach(element => {
    if(element.id == 2){
        console.log(`El estudiante es ${JSON.stringify(element)}`);
        console.log(`El estudiante es ${element.nombre + ' ' + element.apellido}`);
    }else{
        console.log(`El estudiante con el id 2 no ha sido encontrado`);
    }
});

let estudianteEncontrar = arregloEstudiantes.find(x => x.id == 2);
if(estudianteEncontrar == null){
 console.log('Estudiante no encontrado');
}else{
    console.log(estudianteEncontrar);
}




console.log(arregloEstudiantes);
for (let x = 0; x < arregloEstudiantes.length; x++){
    console.log(arregloEstudiantes[x].edad);
}

let x =0;
while(x < arregloEstudiantes.length){
    console.log(arregloEstudiantes[x]);
    x++;
}

let y = 0; 
do{
    console.log(arregloEstudiantes[y]);
    y++;
}while(y < arregloEstudiantes.length);




let arregloMixto = [1,2,'Maria','Pedro',3];
console.log(arregloMixto);

arregloMixto.forEach(element => {
    ///console.log(`El ${element} es ${typeof element}`);
    if(typeof element == 'number'){
        console.log(`El elemento es ${element} es numerico`);
    }

    if(typeof element == 'string'){
        console.log(`El elemento es ${element} es string`);
    }
});



let identificacion = 2.5;

if(typeof identificacion != 'string'){
    console.log('Digite correctamente su identificacion');
}


