///////////////////////////////////REGISTRO DE USUARIOS///////////////////////////////////////
class Usuarios {
  constructor(nombre, apellido, usuario, mail, contraseña) {
    this.nombre = nombre
    this.apellido = apellido
    this.usuario = usuario
    this.mail = mail
    this.contraseña = contraseña
  }
}

let title = document.querySelector('title').textContent
//↓ condicional añadido para que sólo corra la función en la página correspondiente
if (title === 'Registrarse') {
  const UsuariosRegistrados = []

  function registro() {
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let usuario = document.getElementById('usuario').value
    let mail = document.getElementById('mail').value
    let contraseña = document.getElementById('contraseña').value

    const userReg = new Usuarios(nombre, apellido, usuario, mail, contraseña)

    UsuariosRegistrados.push(userReg)

    localStorage.setItem('RegUsuarios', JSON.stringify(UsuariosRegistrados))

    alert('registro exitoso, por favor inicie sesion')
    window.location = 'login.html'
  }

  const btnReg = document.getElementById('reg')

  btnReg.addEventListener('click', event => {
    event.preventDefault()
    registro()
  })
}

///////////////////////////////////LOGUEO DE USUARIO//////////////////////////////////////////

//↓ condicional añadido para que sólo corra la función en la página correspondiente
if (title === 'Login') {
  function login() {
    let user = document.getElementById('user').value
    let password = document.getElementById('password').value

    //   localStorage.getItem('RegUsuarios', JSON.parse(UsuariosRegistrados))
    const usuariosFromStorage = JSON.parse(localStorage.getItem('RegUsuarios'))
    //↑ sintaxis correcta para parsear los datos del storage

    console.log(usuariosFromStorage)

    if (
      user === usuariosFromStorage[0].nombre &&
      password === usuariosFromStorage[0].contraseña
    ) {
      alert('felicitaciones')
    } else {
      alert('mal ahi')
    }
  }

  const iniciarsession = document.getElementById('login')

  iniciarsession.addEventListener('click', event => {
    event.preventDefault()
    login()
  })
  console.log(document.querySelector('title'))
}
