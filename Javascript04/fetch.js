const { console } = require('inspector');
const fetch = require('node-fetch');

const url = "https://crudcrud.com/api/267465972b12459793f2dfd3204cc0c3/";

function obtenerPersonas(){
    fetch(`${url}persona`)
    .then(respuesta => respuesta.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

function obtenerUnaPersonaPorId(id){
    fetch(`${url}persona/${id}`)
    .then(respuesta => respuesta.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

//obtenerPersonas();
//obtenerUnaPersonaPorId("6934311de9794a03e851e1b1");

let persona3 = {
   nombre: "Juan",
   apellido: "De la Cruz",
   edad: 28
}

function guardarPersona(persona){
    fetch(`${url}persona`,{
        method : 'POST',
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(persona)
    }).then(respuesta => respuesta.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

//guardarPersona(persona3);
let personaPorActualizar = {
  nombre: "Carlos",
  apellido: "Rammirez",
  edad: 21
}
function actualizarPersona(id,personaPorActualizar){
    fetch(`${url}persona/${id}`,{
        method : 'PUT',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(personaPorActualizar)
    })
      .then(data => {
        if(data.status == 200){
            console.log("Su información ha sido actualizado con éxito")
        }else{
            console.log("Lo sentimos no se pudo actualizar su información");
        }
      })
      .catch(error => console.log(error))
}

//actualizarPersona("69343782e9794a03e851e1cc",personaPorActualizar);

function eliminarPersona(id){
    fetch(`${url}persona/${id}`,{
        method : 'DELETE'
    }).then(respuesta => {
        if(respuesta.status == 200){
            console.log("El registro persona ha sido eliminado");
        }else{
            console.log("Lo sentimos no se pudo eliminar a la persona");
        }
    })
    .catch(error => console.log(error));
}

eliminarPersona("6934374de9794a03e851e1c9");