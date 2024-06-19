
# Temas de JavaScript

## 1. Seleccionar Elementos con querySelector

### Explicación
`querySelector` es un método que devuelve el primer elemento que coincide con un selector CSS especificado en el documento. Este método puede seleccionar elementos por su clase, id, etiqueta, atributos, etc.

### Ejemplo
```html
<!DOCTYPE html>
<html>
<head>
    <title>querySelector Example</title>
</head>
<body>
    <p class="intro">This is an introductory paragraph.</p>
    <p>This is a regular paragraph.</p>
    <script>
        const intro = document.querySelector('.intro');
        console.log(intro.textContent); // Output: This is an introductory paragraph.
    </script>
</body>
</html>
```

## 2. Seleccionar Elementos con querySelectorAll

### Explicación
`querySelectorAll` es un método que devuelve una NodeList (una lista de nodos) de todos los elementos que coinciden con un selector CSS especificado en el documento.

### Ejemplo
```html
<!DOCTYPE html>
<html>
<head>
    <title>querySelectorAll Example</title>
</head>
<body>
    <p class="intro">This is an introductory paragraph.</p>
    <p class="intro">This is another introductory paragraph.</p>
    <script>
        const intros = document.querySelectorAll('.intro');
        intros.forEach((intro, index) => {
            console.log(`Intro ${index + 1}: ${intro.textContent}`);
        });
    </script>
</body>
</html>
```

## 3. Crear HTML con createElement

### Explicación
`createElement` es un método utilizado para crear un nuevo elemento HTML. Este método toma un nombre de etiqueta HTML como parámetro y devuelve el nuevo elemento.

### Ejemplo
```html
<!DOCTYPE html>
<html>
<head>
    <title>createElement Example</title>
</head>
<body>
    <div id="container"></div>
    <script>
        const container = document.getElementById('container');
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'This is a new paragraph created with createElement.';
        container.appendChild(newParagraph);
    </script>
</body>
</html>
```

## 4. Eventos en JavaScript

### Explicación
Los eventos en JavaScript son acciones o sucesos que ocurren en el navegador. Pueden ser generados por la interacción del usuario (como clics o teclas presionadas) o por otros medios como la carga de una página.

### Ejemplo
```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Events Example</title>
</head>
<body>
    <button id="myButton">Click Me</button>
    <script>
        const button = document.getElementById('myButton');
        button.addEventListener('click', () => {
            alert('Button was clicked!');
        });
    </script>
</body>
</html>
```

## 5. Reaccionar a Clicks en JavaScript

### Explicación
Reaccionar a clics en JavaScript implica añadir un manejador de eventos a un elemento HTML que responda a eventos de clic.

### Ejemplo
```html
<!DOCTYPE html>
<html>
<head>
    <title>React to Clicks Example</title>
</head>
<body>
    <button id="clickButton">Click Me</button>
    <script>
        const clickButton = document.getElementById('clickButton');
        clickButton.addEventListener('click', () => {
            console.log('Button was clicked!');
        });
    </script>
</body>
</html>
```

## 6. Eventos con el Teclado

### Explicación
Los eventos de teclado en JavaScript se generan cuando el usuario presiona o suelta una tecla en el teclado. Algunos de los eventos más comunes son `keydown`, `keyup`, y `keypress`.

### Ejemplo
```html
<!DOCTYPE html>
<html>
<head>
    <title>Keyboard Events Example</title>
</head>
<body>
    <input type="text" id="textInput" placeholder="Type something...">
    <script>
        const textInput = document.getElementById('textInput');
        textInput.addEventListener('keydown', (event) => {
            console.log(`Key "${event.key}" pressed [event: keydown]`);
        });
        textInput.addEventListener('keyup', (event) => {
            console.log(`Key "${event.key}" released [event: keyup]`);
        });
    </script>
</body>
</html>
```

## 7. Eventos en Formularios

### Explicación
Los eventos en formularios en JavaScript permiten a los desarrolladores manejar la interacción del usuario con los formularios, como el envío de datos, cambios en los campos, etc.

### Ejemplo
```html
<!DOCTYPE html>
<html>
<head>
    <title>Form Events Example</title>
</head>
<body>
    <form id="myForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <input type="submit" value="Submit">
    </form>
    <script>
        const form = document.getElementById('myForm');
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevents the form from submitting
            const name = document.getElementById('name').value;
            console.log(`Form submitted with name: ${name}`);
        });
    </script>
</body>
</html>
```
