
let productos = [
    { codigo: '1010', producto: 'Manzana', precio: 0.25 },
    { codigo: '1011', producto: 'Pasta Colgate', precio: 1.25 },
    { codigo: '1012', producto: 'Yogurt griego', precio: 0.50 },
    { codigo: '1013', producto: 'Jabón', precio: 0.35 },
    { codigo: '1014', producto: 'Cubeta de Huevos', precio: 2.50 },
]

let arregloAgregadoProducto = [];

function buscarAgregarProducto(){
    let obtenerCodigoProducto = document.getElementById('idProducto').value;
    console.log(obtenerCodigoProducto);

    let productoEncontrado = productos.find(x => x.codigo == obtenerCodigoProducto);
    console.log(productoEncontrado);

    arregloAgregadoProducto.push(productoEncontrado);
    calcularValores();
    renderizarTabla();
}

function renderizarTabla(){
    document.getElementById('detalle').innerHTML ='';
    arregloAgregadoProducto.forEach((element, index) => {
        document.getElementById('detalle').innerHTML += `
            <tr>
                <td>${element.codigo}</td>
                <td>${element.producto}</td>
                <td>1</td>
                <td>${element.precio.toFixed(2)}</td>
                <td><span onclick='eliminarProducto(${index})' class="material-symbols-outlined">delete</span></td>
            </tr>
        `
    });
}

//idSubtotal
//idIva
//idTotal
function calcularValores(){
    let sumaSubtotal = 0;
    arregloAgregadoProducto.forEach(element => {
        sumaSubtotal += element.precio;
    });
    document.getElementById('idSubtotal').value = '$ ' + sumaSubtotal.toFixed(2);
    console.log(sumaSubtotal);
    let ivaCobrado = sumaSubtotal * 0.15;
    document.getElementById('idIva').value = '$ ' + ivaCobrado.toFixed(2);
    let sumaTotal = sumaSubtotal + ivaCobrado;
    document.getElementById('idTotal').value = '$ ' + sumaTotal.toFixed(2);
}

function eliminarProducto(index){
    arregloAgregadoProducto.splice(index,1);
     renderizarTabla();
}