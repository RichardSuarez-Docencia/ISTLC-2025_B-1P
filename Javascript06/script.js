function guardarPersona(){
  let formulariosHtml = document.forms['formulario'];
  
  let nombre = formulariosHtml['idNombre'].value;
  let apellido = formulariosHtml['idApellido'].value;
  console.log(`El estudiante es: ${nombre + ' ' +apellido}`);

  document.getElementById("respuesta").innerHTML = `<h1>El estudiante es: ${nombre + ' ' +apellido}</h1>`;
  console.log(`<h1>El estudiante es: ${nombre + ' ' +apellido}</h1>`);
  mostrarPersona(nombre,apellido);
}

function mostrarPersona(nombre, apellido){
    let bodyElement = document.getElementById("detalle")
    console.log(bodyElement);

    bodyElement.innerHTML += `
      <tr>
        <td>${nombre}</td>
        <td>${apellido}</td>
      </tr>
    `;

}