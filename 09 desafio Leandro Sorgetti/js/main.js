document.getElementById('presentar-btn').addEventListener('click', presentarPersonaje);

function presentarPersonaje() {
    const nombre = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");

    if (!nombre) return;

    const nombreCompleto = obtenerNombreCompleto(nombre);

    if (!nombreCompleto) {
        alert('Personaje desconocido');
        return;
    }

    document.querySelector('h1 span').textContent = nombreCompleto;

    document.querySelectorAll('.personaje').forEach(e => e.style.display = 'none');

    const elementoPersonaje = document.getElementById(nombre.toLowerCase());

    if (elementoPersonaje) {
        elementoPersonaje.style.display = 'block';
        elementoPersonaje.setAttribute('title', 'Presentado');
    }
}

function obtenerNombreCompleto(nombre) {
    const nombresCompletos = {
        mario: 'Mario',
        luigi: 'Luigi',
        bowser: 'Bowser Morton Koopa',
        peach: 'Princesa Peach Toadstool',
        yoshi: 'T. Yoshisaur Munchakoopas',
        toad: 'Toad',
        toadette: 'Toadette',
        daisy: 'Princesa Daisy'
    };

    return nombresCompletos[nombre.toLowerCase()] || null;
}
