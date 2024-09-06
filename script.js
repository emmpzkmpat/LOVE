// Referencias al DOM
const nombreInput = document.getElementById('nombre');
const mostrarFlorBtn = document.getElementById('mostrarFlor');
const florSection = document.getElementById('flor-section');
const florCanvas = document.getElementById('florCanvas');
const mensaje = document.getElementById('mensaje');

// Inicializa el canvas
const ctx = florCanvas.getContext('2d');
florCanvas.width = 400;
florCanvas.height = 400;

// Función para dibujar una flor con múltiples capas de pétalos
function dibujarFlor() {
    const capas = [
        { radio: 100, petalos: 24, ancho: 30, alto: 14 }, // Capa externa
        { radio: 80, petalos: 24, ancho: 25, alto: 12 },  // Capa intermedia
        { radio: 60, petalos: 24, ancho: 20, alto: 10 }    // Capa interna
    ];
    let angulo = 0;

    ctx.clearRect(0, 0, florCanvas.width, florCanvas.height);

    // Función para dibujar los pétalos de una capa
    function dibujarCapas(capaIndex) {
        const capa = capas[capaIndex];
        const intervalo = setInterval(() => {
            // Coordenadas del centro de cada pétalo
            const x = 200 + capa.radio * Math.cos(angulo);
            const y = 200 + capa.radio * Math.sin(angulo);

            // Dibujar pétalo
            ctx.beginPath();
            ctx.ellipse(x, y, capa.ancho, capa.alto, angulo, 0, Math.PI * 2);
            ctx.fillStyle = 'black';
            ctx.fill();

            // Agregar borde de color café
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'yellow';
            ctx.stroke();

            angulo += Math.PI * 2 / capa.petalos; // Incrementar el ángulo para el siguiente pétalo

            // Cuando se completa el círculo
            if (angulo >= Math.PI * 2) {
                clearInterval(intervalo);
                angulo = 0; // Resetear ángulo para la siguiente capa
                // Dibujar la siguiente capa si hay más
                if (capaIndex + 1 < capas.length) {
                    dibujarCapas(capaIndex + 1); // Pasar al siguiente índice de capa
                } else {
                    // Dibujar el centro de la flor
                    ctx.beginPath();
                    ctx.arc(200, 200, 40, 0, Math.PI * 2); // Círculo central
                    ctx.fillStyle = '#381111'; // Color del centro
                    ctx.fill();
                    
                    const nombre = nombreInput.value;
                    mensaje.textContent = `Te amo, ${nombre}`;
                }
            }
        }, 80); // Ajustar la velocidad aquí
    }

    // Iniciar dibujo con la primera capa
    dibujarCapas(0); // Comenzar con la capa más externa
}



// Manejar el evento del botón
mostrarFlorBtn.addEventListener('click', () => {
    if (nombreInput.value === '') {
        alert('Por favor ingresa un nombre.');
        return;
    }

    // Ocultar el div que contiene el input y el botón
    document.getElementById('input-section').style.display = 'none';

    // Cambiar el fondo a negro y mostrar la sección del canvas
    document.body.style.backgroundColor = 'black';
    florSection.style.display = 'flex';

    // Comenzar a dibujar la flor
    dibujarFlor();
});
