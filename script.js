// Selecciona el botón "No" usando su id
const noBtn = document.getElementById('noBtn');

// Función para mover el botón a una posición aleatoria
function moverBoton() {
    // Calcula una posición aleatoria dentro del área visible de la ventana
    const randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight));

    // Asegura que el botón no se salga de la ventana visible
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${Math.max(0, randomX)}px`;
    noBtn.style.top = `${Math.max(0, randomY)}px`;
}

// Añade el evento para mover el botón cuando el mouse pasa sobre él (para PC)
noBtn.addEventListener('mouseover', moverBoton);

// Añade el evento para mover el botón cuando se toca (para dispositivos móviles)
noBtn.addEventListener('touchstart', moverBoton);

// Función para mostrar el mensaje cuando se presiona el botón "Sí"
function mostrarMensaje() {
    alert('¡Ya lo sabía!');
}
