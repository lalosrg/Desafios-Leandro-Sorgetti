
var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (var index = 1; index <= cantidadDeGatos; index++) {
    var emojiGato = (index % 2 === 0) ? "🐈‍⬛" : "🐈";

    var resultado = "Gato #" + index + ": " + emojiGato + " ";

    for (var pasos = 1; pasos <= cantidadDePasos; pasos++) {
        resultado += "🐾";
    }

    console.log(resultado);
}