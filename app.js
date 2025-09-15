// Importante a tener en cuenta, poder ingresar varios nombres, validación de datos, 
// mostrar un nombre ne pantalla al sortear amigos. 
// Voy a usar, arrays, funciones, variables, alert, randomizar y botones funcionales.
let amigos = [];

function agregarAmigo(){
    let nuevoAmigo = document.getElementById("amigo");
    
    if (nuevoAmigo.value.length > 1) {
        amigos.push(nuevoAmigo.value);
    } else {
        alert("Por favor, inserte un nombre.");
    }
    
    nuevoAmigo.value = '';

    actualizarAmigos()
}

   

function actualizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""

    for (let x = 0; x < amigos.length; x++) {
        listaAmigos.innerHTML = listaAmigos.innerHTML + '<li>' + amigos[x] + '</li>'
    }
}


