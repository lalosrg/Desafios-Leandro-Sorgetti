document.addEventListener('DOMContentLoaded', function () {
    console.log("Contenido del DOM cargado");

    const textareaOrigen = document.getElementById('origen');
    const divDestino = document.getElementById('destino');
    const btnReemplazar = document.getElementById('btn-reemplazar');
    const btnAgregar = document.querySelector('.btn-agregar');
    const btnAgregarNVeces = document.querySelectorAll('.btn-agregar')[3];
    const btnVaciar = document.querySelector('.btn-vaciar');
    const btnConvertirMayusculas = document.querySelector('.btn-convertir-a-mayusculas');
    const btnConvertirMinusculas = document.querySelector('button');

    textareaOrigen.value = '<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>';

    textareaOrigen.addEventListener('input', function () {
        document.querySelectorAll('input, button').forEach(elem => elem.disabled = false);
    });

    btnReemplazar.addEventListener('click', () => divDestino.innerHTML = textareaOrigen.value);
    btnAgregar.addEventListener('click', () => divDestino.innerHTML += textareaOrigen.value);

    document.querySelectorAll('.btn-agregar').forEach(btn => {
        btn.addEventListener('click', function () {
            const veces = this.value === 'Agregar n veces' ? prompt('Ingrese la cantidad de veces:') : parseInt(this.value.split(' ')[1]) || 1;
            divDestino.innerHTML += new Array(veces).fill(textareaOrigen.value).join('');
        });
    });

    btnVaciar.addEventListener('click', () => divDestino.innerHTML = '');
    btnConvertirMayusculas.addEventListener('click', () => divDestino.innerHTML = divDestino.innerHTML.toUpperCase());
    btnConvertirMinusculas.addEventListener('click', () => divDestino.innerHTML = divDestino.innerHTML.toLowerCase());

    document.querySelectorAll('li').forEach(li => li.innerHTML = "[Ok] " + li.innerHTML);
});
