// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los amigos
let amigos = [];

//Funcion para agregar un amigo
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validacion campo
    if(nombreAmigo === ""){
        alert('Por favor, ingresa un nombre.');
        return;
    }

    // Validar que nombre no este duplicado
    if(amigos.includes(nombreAmigo)){
        alert(`El nombre "${nombreAmigo}" ya se encuentra en lista.`);
        return;
    }

    // Agregar el nombre al array amigos
    amigos.push(nombreAmigo);

    //Limpiar el campo de entrada
    inputAmigo.value = "";

    //Actualizar la lista en el HTML
    actualizarLista();
}

// Funcion para actualizar la lista de amigos en la interfaz
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = ""; // Borra cualquier contenid previo

    for(let i = 0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);

    }
}

// Funcion para seleccionar un amigo aleatorio
function sortearAmigo(){
    if (amigos.length < 2) {
        alert('Necesitas al menos 2 amigos para realizar el sorteo.')
        return;
    }

    // Genera un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un numero aleatario entre 0 y la longitud del array

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio]; // Usa el indice aleatorio para obtener un nombre del array.

    // Mostrar el resultado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado : <strong>${amigoSorteado}</strong>`;
}
