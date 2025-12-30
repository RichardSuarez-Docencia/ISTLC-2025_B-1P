
let productos = [
    { codigo: '1010', producto: 'Manzana', precio: 0.25 },
    { codigo: '1011', producto: 'Pasta Colgate', precio: 1.25 },
    { codigo: '1012', producto: 'Yogurt griego', precio: 0.50 },
    { codigo: '1013', producto: 'Jabón', precio: 0.35 },
    { codigo: '1014', producto: 'Cubeta de Huevos', precio: 2.50 },
]

let arregloAgregadoProducto = [];

function buscarAgregarProducto(){
    let obtenerCodigoProducto = document.getElementById('idProducto').value || "";
    console.log(obtenerCodigoProducto);

    if(obtenerCodigoProducto == "" || undefined || null ){
        console.log("error");
        notificacionProducto("Por favor ingrese el código de un producto","alert","alert-danger")
    }else{
        let productoEncontrado = productos.find(x => x.codigo == obtenerCodigoProducto);
        console.log(productoEncontrado);
        if(productoEncontrado){
        arregloAgregadoProducto.push(productoEncontrado);
        calcularValores();
        renderizarTabla();
        }else{
            notificacionProducto("Producto no fue encontrado en stock","alert","alert-warning")
        }
        
    }
    
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
    return sumaTotal;
}

function eliminarProducto(index){
    arregloAgregadoProducto.splice(index,1);
     renderizarTabla();
     calcularValores();
}


document.getElementById("idValorRecibido").addEventListener('input', function (){
    calcularValoresCambio();
})

function calcularValoresCambio(){
     let valorRecibido = parseFloat(document.getElementById("idValorRecibido").value).toFixed(2) || 0;
    ///let valorTotal = parseFloat(document.getElementById("idTotal").value) || 0;

    let cambio = valorRecibido - calcularValores();

    document.getElementById("idCambio").value = "$ " + cambio.toFixed(2);
}

function notificacionProducto(nombreAlerta,claseUno,claseDos){
    document.getElementById("idAlertaNotificacion").classList.add(claseUno,claseDos);
    document.getElementById("idAlertaNotificacion").innerHTML = nombreAlerta;

    setTimeout(() => {
        document.getElementById("idAlertaNotificacion").classList.remove(claseUno,claseDos);
        document.getElementById("idAlertaNotificacion").innerHTML = "";
    }, 3000);
}

function pagar(){
    window.print();
}