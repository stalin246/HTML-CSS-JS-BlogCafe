// -----Eventos de los inputs y text area

const datos = { // Definimos un objeto global solo si los ID son iguales lo utilizaremos como template en la funcion leerTexto y tenga una buena forma de salida de texto en el cosole
    nombre: '',
    email: '',
    mensaje: ''


}
const nombre = document.querySelector('#nombre'); // se crea la variable y el id al cual se le aplicara el evento
const email = document.querySelector('#email'); // se crea la variable y el id al cual se le aplicara el evento
const mensaje = document.querySelector('#mensaje'); // se crea la variable y el id al cual se le aplicara el evento
// nombre.addEventListener('input', function(e){ // si agegamos el parametro "e" pod
//     console.log(e.target.value) // "target" es input en donde se esta escribiendo y "value" es el valor del contenido que se escribe o usa
// }) // Uno de los eventos que existe es change e input

// email.addEventListener('input', function(e){ // si agegamos el parametro "e" pod
//     console.log(e.target.value) // "target" es input en donde se esta escribiendo y "value" es el valor del contenido que se escribe o usa
// }) // Uno de los eventos que existe es change e input

// mensaje.addEventListener('input', function(e){ // si agegamos el parametro "e" pod
//     console.log(e.target.value) // "target" es input en donde se esta escribiendo y "value" es el valor del contenido que se escribe o usa
// }) // Uno de los eventos que existe es change e input

// Utilizando funciones
nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);


// function leerTexto (e){
//     console.log(e.target.value); // se imprimen los datos tiepasdos en el campo nombre, texto email de forma seguida sin formato
//     console.log(e.target) // Contiene el input y los elemendo o propiedades del contenido, nos centraremos en el "id"

// }


//-------Evento Formulario
// Evento submit
const formulario = document.querySelector('.formulario'); // Utilizamos el selector unico y usamos la clase que esta usando el formulario

formulario.addEventListener('submit', function(e){

    e.preventDefault();

    // Validar Formulario, en este caso mostrar si algun campo quedo vacio al usuario
    const {nombre, email, mensaje} = datos // Extraemos los valores o propiedades del objeto usando destructuring en una variable "datos"

    if(nombre == '' || email == '' || mensaje== ''){
        mostrarAlerta('Todos los campos son obligatorios', true); // Se utilizara una funcion 
        
        return; // Corta la ejecucion del codigo si se cumple la ejecucion

    }

    // Creamos la alerta de envio correcto
    mostrarAlerta('Mensaje enviado correctamente');

    // console.log('enviando formulario');



}); // Registramos el evento y elegimos en este caso el evento 'submit' para el envio del formulario




function leerTexto (e){
    datos[e.target.id] = e.target.value;// De esta forma podemos reescribir al objeto y se reasiga segun sus posiciones el contenido datos[e.target.id] =>['nombre','email','mensaje']
    //console.log(datos)  // Se imprimen las propiedades del objeto segun el campo que se tipee

}


function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error');

    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove(); // metodo para eliminar un elemento html
        
    }, 5000);



}


