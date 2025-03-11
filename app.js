// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = []; //Lista de los nombres a sortear

// Función para obtener y agregar un nombre a la lista desde el input
function agregar_amigo() {
    const input_amigo = document.getElementById('amigo'); // Obtener el input
    const nombre = input_amigo.value.trim(); // Obtener el valor del input y eliminar espacios en blanco
    
    if (nombre !== '') { // Verificar que el input no esté vacío
        nombres.push(nombre); // Agregar el nombre a la lista
        input_amigo.value = ''; // Limpiar el input después de añadir
        actualizarListaAmigos(); // Llamamos a la función para actualizar la lista
        console.log('Nombres en la lista:', nombres); // Para verificar
    }
    else { 
        alert('Por favor, ingresa un nombre'); //si el input está vacío muestra un alert
    }
}

function actualizarListaAmigos() {
    const listaHTML = document.getElementById('listaAmigos'); // Obtener el elemento lista donde se mostrarán los nombres
    listaHTML.innerHTML = ''; // Limpia la lista antes de agregar los nombres
    
    nombres.forEach(x => { // Recorrer la lista de nombres
        const li = document.createElement('li'); // Crear un elemento li
        li.textContent = x; // Agregar el nombre al li
        listaHTML.appendChild(li); // Agregar el li a la lista
    });
}

function sortear_amigo() {
    if (nombres.length > 1) { // Verifica que haya más de un nombre en la lista, pues si hay solo uno no tiene sentido sortear
        const amigo = nombres[Math.floor(Math.random() * nombres.length)]; // Elegir un nombre al azar
        const resultado = document.getElementById('resultado'); // Obtener el elemento donde se mostrará el resultado
        resultado.innerHTML = `<li>El amigo sorteado es: ${amigo}</li>`; // Mostrar el nombre sorteado
    }
    else {
        alert('Debes agregar al menos dos nombres para poder sortear'); // Si no hay nombres suficientes, muestra un alert
    }
}