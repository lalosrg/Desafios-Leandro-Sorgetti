
var cantidadDeGatos = 10;


for (var index = 1; index <= cantidadDeGatos; index++) {
   
    var indiceEmoji = index % 3;
    
    var emoji = "";
    if (indiceEmoji === 1) {
        emoji = "😺";
    } else if (indiceEmoji === 2) {
        emoji = "😸";
    } else {
        emoji = "😹";
    }

    console.log("Gato #" + index + ": " + emoji);
}

