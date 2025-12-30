console.log("Mi primer Hola mundo en Typescript");

let a: number = 4;
let nombre: string = "Julian";
let activo : boolean = true;
let nada :null =null;
let sinDefinir : undefined;

let cualquierCosa: any = 4;
cualquierCosa ="6";
cualquierCosa = true;

let ArregloCualquierocas: any[];

function datosEstudiantes(nombre:string="Martha", edad:number=8): void{
    console.log(`Nombre: ${nombre} , Edad: ${edad}`);
}

datosEstudiantes();
datosEstudiantes("kevin");
datosEstudiantes("Carlos",25);

/*datosEstudiantes("Martha");
datosEstudiantes("Martha",29);*/

interface Persona{
   nombre? : string,
   apellido?: string,
   edad? : number,
   fechaNacimiento?: string
}

let persona: Persona = {
   nombre : 'Juanito',
   apellido: 'Perez',
   edad: 20,
}

let ArregloPersona: Persona[] = [
    {
   nombre : 'Juanito',
   apellido: 'Perez',
   edad: 20,
   fechaNacimiento: Date.now().toString()
},
{
   nombre : 'Kevin',
   apellido: 'Lozano',
   edad: 24,
   fechaNacimiento: Date.now().toString()
},
{
   nombre : 'Jhon',
   apellido: 'Mendez',
   edad: 23,
   fechaNacimiento: Date.now().toString()
}
]


console.log(persona);
console.log(JSON.stringify(ArregloPersona));