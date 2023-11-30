document.addEventListener("DOMContentLoaded", function () {
  validarDatos();
});

function validarDatos() {
  resetColors();
  mostrarNombresCompletos("formIntegrante1", "formIntegrante2");

  if (compararNombres("formIntegrante1", "formIntegrante2") == true) {
    console.log("Los nombres son iguales");
  } else {
    console.log("Los nombres son diferentes");
  }

  if (confirm("Desea comparar los apellidos?") == true) {
    if (compararApellidos("formIntegrante1", "formIntegrante2") == true) {
      console.log("Los apellidos son iguales");
    } else {
      console.log("Los apellidos son diferentes");
    }
  }
}

function resetColors() {
  document.querySelectorAll("input").forEach(function (input) {
    input.style.color = "black";
  });
}

function generarNombre(formId) {
  let form = document.getElementById(formId);

  let datos = {};
  form.querySelectorAll("input").forEach(function (input) {
    datos[input.name] = input.value;
  });

  datos.apellido = datos.apellido.toUpperCase();
  datos.segundoApellido = datos.segundoApellido.toUpperCase();
  return datos;
}

function nombreCompleto(formId) {
  let integrante = generarNombre(formId);
  return `${integrante.nombre} ${integrante.segundoNombre} ${integrante.apellido} ${integrante.segundoApellido}`.replace(
    /\s{2,}/g,
    " "
  );
}

function destacarNombresCoincidentes(formId1, formId2, color = "red") {
  let integrante1 = generarNombre(formId1);
  let integrante2 = generarNombre(formId2);

  if (integrante1.nombre == integrante2.nombre) {
    document.querySelector(`#${formId1} input[name="nombre"]`).style.color =
      color;
    document.querySelector(`#${formId2} input[name="nombre"]`).style.color =
      color;
  }
  if (integrante1.segundoNombre == integrante2.segundoNombre) {
    document.querySelector(
      `#${formId1} input[name="segundoNombre"]`
    ).style.color = color;
    document.querySelector(
      `#${formId2} input[name="segundoNombre"]`
    ).style.color = color;
  }
  if (integrante1.nombre == integrante2.segundoNombre) {
    document.querySelector(`#${formId1} input[name="nombre"]`).style.color =
      color;
    document.querySelector(
      `#${formId2} input[name="segundoNombre"]`
    ).style.color = color;
  }
  if (integrante1.segundoNombre == integrante2.nombre) {
    document.querySelector(
      `#${formId1} input[name="segundoNombre"]`
    ).style.color = color;
    document.querySelector(`#${formId2} input[name="nombre"]`).style.color =
      color;
  }
}

function destacarApellidosCoincidentes(formId1, formId2, color) {
  let integrante1 = generarNombre(formId1);
  let integrante2 = generarNombre(formId2);

  if (integrante1.apellido == integrante2.apellido) {
    document.querySelector(`#${formId1} input[name="apellido"]`).style.color =
      color;
    document.querySelector(`#${formId2} input[name="apellido"]`).style.color =
      color;
  }
  if (integrante1.segundoApellido == integrante2.segundoApellido) {
    document.querySelector(
      `#${formId1} input[name="segundoApellido"]`
    ).style.color = color;
    document.querySelector(
      `#${formId2} input[name="segundoApellido"]`
    ).style.color = color;
  }
  if (integrante1.apellido == integrante2.segundoApellido) {
    document.querySelector(`#${formId1} input[name="apellido"]`).style.color =
      color;
    document.querySelector(
      `#${formId2} input[name="segundoApellido"]`
    ).style.color = color;
  }
  if (integrante1.segundoApellido == integrante2.apellido) {
    document.querySelector(
      `#${formId1} input[name="segundoApellido"]`
    ).style.color = color;
    document.querySelector(`#${formId2} input[name="apellido"]`).style.color =
      color;
  }
}

function compararNombres(formId1, formId2) {
  let integrante1 = generarNombre(formId1);
  let integrante2 = generarNombre(formId2);

  if (
    integrante1.nombre == integrante2.nombre ||
    integrante1.segundoNombre == integrante2.segundoNombre ||
    integrante1.nombre == integrante2.segundoNombre ||
    integrante1.segundoNombre == integrante2.nombre
  ) {
    let color = prompt("Los nombres son iguales!\nElegir un color:");
    destacarNombresCoincidentes(formId1, formId2, color);
    return true;
  } else {
    return false;
  }
}

function compararApellidos(formId1, formId2) {
  let integrante1 = generarNombre(formId1);
  let integrante2 = generarNombre(formId2);

  if (
    integrante1.apellido == integrante2.apellido ||
    integrante1.segundoApellido == integrante2.segundoApellido ||
    integrante1.apellido == integrante2.segundoApellido ||
    integrante1.segundoApellido == integrante2.apellido
  ) {
    let color = prompt("Los apellidos son iguales!\nElegir un color:");
    destacarApellidosCoincidentes(formId1, formId2, color);
    return true;
  } else {
    return false;
  }
}

function mostrarNombresCompletos(formId1, formId2) {
  console.log(`
  -----
  Integrante 1: ${nombreCompleto(formId1)}
  Integrante 2: ${nombreCompleto(formId2)}
  -----
  `);
}

function EventoClickFormulario(event, formId) {
  validarDatos();
}
