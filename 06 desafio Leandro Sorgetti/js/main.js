const obtenerValor = (nodo) => nodo.textContent.trim();

const generarNombreCompleto = (
  nodoNombre,
  nodoSegundoNombre,
  nodoApellido,
  nodoSegundoApellido
) => {
  const nombres = [obtenerValor(nodoNombre), obtenerValor(nodoSegundoNombre)];
  const apellidos = [
    obtenerValor(nodoApellido).toUpperCase(),
    obtenerValor(nodoSegundoApellido).toUpperCase(),
  ];

  const nombreCompleto = `${nombres.join(" ")} ${apellidos.join(" ")}`.replace(
    /\s{2,}/g,
    " "
  );
  return nombreCompleto.trim();
};

const integrantes = document.querySelectorAll("dl");

const datosCompletos1 = generarNombreCompleto(
  integrantes[0].children[1],
  integrantes[0].children[3],
  integrantes[0].children[5],
  integrantes[0].children[7]
);

const datosCompletos2 = generarNombreCompleto(
  integrantes[1].children[1],
  integrantes[1].children[3],
  integrantes[1].children[5],
  integrantes[1].children[7]
);

console.log(
  `-----\nIntegrante 1: "${datosCompletos1}"\nIntegrante 2: "${datosCompletos2}"\n-----`
);

const comparar = (dato1, dato2) =>
  dato1.length > 0 && dato2.length > 0 && dato1 === dato2;

const compararNombres = (nodo1, nodo2) =>
  comparar(obtenerValor(nodo1), obtenerValor(nodo2));

if (
  compararNombres(integrantes[0].children[1], integrantes[1].children[1]) ||
  compararNombres(integrantes[0].children[1], integrantes[1].children[3]) ||
  compararNombres(integrantes[0].children[3], integrantes[1].children[1]) ||
  compararNombres(integrantes[0].children[3], integrantes[1].children[3])
) {
  console.log("Los nombres son iguales");
  let color = prompt("Los nombres son iguales!\nElegir un color:");

  const destacarNombresCoincidentes = (...nodos) =>
    nodos.forEach((nodo) => (nodo.style.color = color));

  if (compararNombres(integrantes[0].children[1], integrantes[1].children[1])) {
    destacarNombresCoincidentes(
      integrantes[0].children[1],
      integrantes[1].children[1]
    );
  }
  if (compararNombres(integrantes[0].children[1], integrantes[1].children[3])) {
    destacarNombresCoincidentes(
      integrantes[0].children[1],
      integrantes[1].children[3]
    );
  }
  if (compararNombres(integrantes[0].children[3], integrantes[1].children[1])) {
    destacarNombresCoincidentes(
      integrantes[0].children[3],
      integrantes[1].children[1]
    );
  }
  if (compararNombres(integrantes[0].children[3], integrantes[1].children[3])) {
    destacarNombresCoincidentes(
      integrantes[0].children[3],
      integrantes[1].children[3]
    );
  }
} else {
  console.log("Los nombres son diferentes");
}

if (confirm("Desea comparar los apellidos?") == true) {
  if (
    compararNombres(integrantes[0].children[5], integrantes[1].children[5]) ||
    compararNombres(integrantes[0].children[5], integrantes[1].children[7]) ||
    compararNombres(integrantes[0].children[7], integrantes[1].children[5]) ||
    compararNombres(integrantes[0].children[7], integrantes[1].children[7])
  ) {
    console.log("Los apellidos son iguales");
    let color = prompt("Los apellidos son iguales!\nElegir un color:");

    const destacarNombresCoincidentes = (...nodos) =>
      nodos.forEach((nodo) => (nodo.style.color = color));

    if (
      compararNombres(integrantes[0].children[5], integrantes[1].children[5])
    ) {
      destacarNombresCoincidentes(
        integrantes[0].children[5],
        integrantes[1].children[5]
      );
    }
    if (
      compararNombres(integrantes[0].children[5], integrantes[1].children[7])
    ) {
      destacarNombresCoincidentes(
        integrantes[0].children[5],
        integrantes[1].children[7]
      );
    }
    if (
      compararNombres(integrantes[0].children[7], integrantes[1].children[5])
    ) {
      destacarNombresCoincidentes(
        integrantes[0].children[7],
        integrantes[1].children[5]
      );
    }
    if (
      compararNombres(integrantes[0].children[7], integrantes[1].children[7])
    ) {
      destacarNombresCoincidentes(
        integrantes[0].children[7],
        integrantes[1].children[7]
      );
    }
  } else {
    console.log("Los apellidos son diferentes");
  }
}
