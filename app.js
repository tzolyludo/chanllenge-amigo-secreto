let nombres = [];
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if(!nombreAmigo){
        alert('Ingrese un nombre valido');
    }else {
        nombres.push(nombreAmigo);
        document.getElementById('amigo').value = '';
        actualizarLista();
    }
    limpiar();
    return;
            
}

function limpiar() {
    document.querySelector('#amigo').value = '';
}

function actualizarLista()  {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < nombres.length; i++) {
        let li = document.createElement('li');
        li.textContent = nombres[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert('No hay nombres en la lista.');
        return;
    }
    let index = Math.floor(Math.random() * nombres.length);
    document.getElementById('resultado').textContent = 'El amigo secreto es: ' + nombres[index];
    
}

