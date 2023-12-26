
function Libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;

    this.mostrarDatos = function (output = 'console') {
        const mensaje = `${this.titulo}, de ${this.autor.toUpperCase()}`;
        (output === 'console') ? console.log(mensaje) : alert(mensaje);
    };

    this.getTitulo = function () {
        return this.titulo;
    };
}

let unLibro = new Libro('Ángeles y Demonios', 'Dan Brown');
console.log(unLibro);

unLibro.mostrarDatos('console');
unLibro.mostrarDatos('alert');

let nuevoLibro = new Libro('Fuego y Sangre', 'George R. R. Martin');
alert(nuevoLibro.getTitulo());

nuevoLibro.mostrarDatos('alert');
nuevoLibro.mostrarDatos('console');
nuevoLibro.mostrarDatos();
