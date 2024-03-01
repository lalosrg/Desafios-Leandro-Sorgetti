
class Usuario {
    constructor(id, nombre, correo) {
      this.id = id;
      this.nombre = nombre;
      this.correo = correo;
    }
  }

  class Formulario {
    constructor() {
      this.usuarios = [];
    }
  
    validarNombre(nombre) {
      return nombre.length >= 3;
    }
  
    validarCorreo(correo) {
      return /\S+@\S+\.\S+/.test(correo);
    }
  
    validarContraseña(contraseña) {
      return contraseña.length >= 8;
    }
  
    registrarUsuario(nombre, correo, contraseña) {
      const id = this.usuarios.length + 1;
      const usuario = new Usuario(id, nombre, correo);
      this.usuarios.push(usuario);
    }
  
    renderTabla() {
      const tbody = document.getElementById('cuerpo-tabla-usuarios');
      tbody.innerHTML = '';
  
      this.usuarios.forEach(usuario => {
        const row = `<tr>
                      <td>${usuario.id}</td>
                      <td>${usuario.nombre}</td>
                      <td>${usuario.correo}</td>
                    </tr>`;
        tbody.innerHTML += row;
      });
    }
  }

  const formulario = new Formulario();
  const formElement = document.getElementById('formulario-registro');
  
  formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
  
    if (formulario.validarNombre(nombre) && formulario.validarCorreo(correo) && formulario.validarContraseña(contraseña)) {
      formulario.registrarUsuario(nombre, correo, contraseña);
      formulario.renderTabla();
      formElement.reset();
    } else {
      alert('Por favor, complete correctamente todos los campos.');
    }
  });
  
  formulario.renderTabla();
  