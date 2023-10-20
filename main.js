// guardar en una variable el elemento id asignado
const btnsumbit = document.getElementById('btnsumbit')
const inputname = document.getElementById('inputname')
const inputemail = document.getElementById('inputemail')
const mensaje = document.getElementById('mensaje')
const mostrarnombre = document.getElementById('mostrarnombre')
const mostraremail = document.getElementById('mostraremail')
const mostrarmensaje = document.getElementById('mostrarmensaje')

// funcion que se ejecuta dando el boton enviar
// primero se guarda en una variable el valor del elemento
// despues se guarda en localstorage una clave y un valor
function onSubmit(e) {
    e.preventDefault()
    const firstNameValue = inputname.value
    localStorage.setItem('inputname',firstNameValue)
    const firstEmailValue = inputemail.value
    localStorage.setItem('inputemail',firstEmailValue)
    const firstMensajeValue = mensaje.value
    localStorage.setItem('mensaje', firstMensajeValue)

// manipular el dom para mostrar los datos guardados en localstorage 
// a la misma vez  que se ejecuta la funcion
    mostrarnombre.innerText = localStorage.getItem('inputname')
    mostraremail.innerText = localStorage.getItem('inputemail')
    mostrarmensaje.innerText = localStorage.getItem('mensaje')
}
// dando al boton enviar salta a ejecutar la funcion
btnsumbit.addEventListener('click',onSubmit)

// cada vez que se inicia la pagina mira si hay algo guardado en el localstorage
// si lo hay enseña en los elementos marcados o el dom
// si no lo hay no aparece nada
mostrarnombre.innerText = localStorage.getItem('inputname')
mostraremail.innerText = localStorage.getItem('inputemail')
mostrarmensaje.innerText = localStorage.getItem('mensaje')
