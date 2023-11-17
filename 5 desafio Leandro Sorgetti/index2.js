
var cantidadDeGatos = 5;
var cantidadDePasos = 3;


for (var index = 1; index <= cantidadDeGatos; index++) {
    var resultado = "Gato #" + index + ": 🐈 ";

    
    for (var pasos = 1; pasos <= cantidadDePasos; pasos++) {
        resultado += "🐾";
    }

  
    console.log(resultado);
}