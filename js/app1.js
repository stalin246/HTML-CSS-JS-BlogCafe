// USARLO EN EL contacto.html para repaso
//---------QuerySelector--------------
// Selecciona el primer elemento 'h2' que se encuentra dentro de un elemento con la clase 'header__texto'
const heading = document.querySelector('.header__texto h2');
// const heading = document.querySelector('#heading') lo ideal es usar el id dentro de las etiquetas
// Cambia el contenido de texto del elemento seleccionado a 'Nuevo Heading'
heading.textContent = 'Nuevo Heading';

// Añade una nueva clase 'Nueva-clase' al elemento seleccionado
heading.classList.add('Nueva-clase');

// Imprime el elemento modificado en la consola para verificación
console.log(heading);



//---------QuerySelectorAll------------

// Selecciona todos los elementos 'a' dentro de un elemento con la clase 'navegacion'
const enlaces = document.querySelectorAll('.navegacion a');

// Imprime en consola la lista completa de enlaces seleccionados
console.log(enlaces);

// Imprime en consola el primer enlace de la lista
console.log(enlaces[0]);

// Cambia el texto del primer enlace a 'Google'
enlaces[0].textContent = 'Google';

// Cambia el atributo href del primer enlace a '<https://google.com>'
enlaces[0].href = '<https://google.com>';

// Añade una nueva clase 'nueva-clase' al primer enlace
enlaces[0].classList.add('nueva-clase');

// Elimina la clase 'navegacion__enlace' del primer enlace
enlaces[0].classList.remove('navegacion__enlace');



//----------CreateElement---------
// Generar un nuevo enlace

// Crear un nuevo elemento 'a' usando document.createElement, recomendando mayúsculas por convención pero no es obligatorio.
const nuevoEnlace = document.createElement('A'); 

// <a href=""></a>

nuevoEnlace.href = 'nuevo-enlace.html'; // Establecer el atributo 'href' del nuevo enlace.
nuevoEnlace.textContent = 'Un nuevo enlace'; // Agregar texto visible al enlace que aparecerá en la página.
nuevoEnlace.classList.add('navegacion__enlace'); // Agregar una clase para aplicar estilos CSS específicos.
console.log(nuevoEnlace); //imjrpime la dorma actual del elemeto <a>
// <a href=""></a>

const navegacion = document.querySelector('.navegacion'); // Seleccionar el elemento del DOM donde se añadirá el nuevo enlace.
navegacion.appendChild(nuevoEnlace); // Agregar el nuevo enlace como hijo del elemento de navegación seleccionado.

// Este proceso resulta en la creación dinámica de un enlace que es añadido al DOM, mostrando cómo JavaScript puede manipular elementos de la página en tiempo real. Se utiliza 'console.log' para imprimir el elemento y verificar su estructura antes de agregarlo al DOM.
console.log(nuevoEnlace); // Imprimir la estructura actual del elemento 'a' en la consola para depuración.




//-------Eventos------------

console.log(1);

// load espera quue el js y los archivos que dependen del html esten listos
window.addEventListener('load', function() {
    console.log(2);

}); // addEventListener para registrar los metodos

window.onload = function (){
    console.log(4);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log(5);
}

); // Solo espera por el html, pero no espera CSS


console.log(3);


//----Eventos click en JavaScript---------------------

// Seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector('.boton--primario'); // Se crea la variable y se selecciona la clase del boton submit por medio del QuerySelector

btnEnviar.addEventListener('click', function(evento) { // Registramos el evento, y si queremos agregamos el parametro "evento" a la funcion para ver los logs en consola
    console.log(evento); // imprime el evento
    evento.preventDefault(); // Previene que se ejecute el evento puede usarse en un condicional o para validar los formularios
    console.log('enviando.formulario');

  

});