const button = document.getElementById('rotatingButton');
const buttonTitle = document.getElementById('buttonTitle');
const buttonContainer = document.getElementById('buttonContainer');
const header = document.getElementById('header');
let buttonCounter = 1;
const totalButtons = 17; // Total de botones

// Lista de imágenes de fondo
const backgroundImages = [
    'imagenes/background1.jpg', 'imagenes/background2.jpg', 'imagenes/background3.jpg', 
    'imagenes/background4.jpg', 'imagenes/background5.jpg', 'imagenes/background6.jpg', 
    'imagenes/background7.jpg', 'imagenes/background8.jpg', 'imagenes/background9.jpg', 
    'imagenes/background10.jpg', 'imagenes/background11.jpg', 'imagenes/background12.jpg', 
    'imagenes/background13.jpg', 'imagenes/background14.jpg', 'imagenes/background15.jpg', 
    'imagenes/background16.jpg', 'imagenes/background17.jpg'
];

// Lista de nombres de botones
const buttonNames = [
    'Zonas verdes', 'Sotanos 1', 'Laboratorios', 'Biblioteca', 
    'Auditorio Principal', 'Cafetería', 'Área Deportiva', 'Parque de Estudio', 
    'Centro de Innovación', 'Residencias Estudiantiles', 'Oficinas Administrativas', 
    'Sala de Conferencias', 'Centro de Salud', 'Museo Universitario', 
    'Plaza de Encuentros', 'Estación de Transporte', 'Jardín Botánico'
];

// Cambia la imagen de fondo y el título del botón
function updateBackgroundAndButton() {
    // Cambiar la imagen de fondo del body
    document.body.style.backgroundImage = `url(${backgroundImages[buttonCounter - 1]})`;

    // Actualizar el título del botón con el nombre correspondiente
    button.textContent = buttonNames[buttonCounter - 1];
}

// Event listener para el scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    // Si el usuario ha hecho scroll, ocultar el título y mostrar el botón
    if (scrollPosition > 100) {
        header.style.opacity = '0'; // Ocultar el título
        buttonContainer.style.display = 'flex'; // Mostrar el botón
    } else {
        header.style.opacity = '1'; // Mostrar el título
        buttonContainer.style.display = 'none'; // Ocultar el botón
    }

    // Calcular el número de botón basado en el desplazamiento
    buttonCounter = Math.ceil((scrollPosition / maxScroll) * totalButtons);

    // Asegurarse de que el contador esté dentro del rango de 1 a 17
    if (buttonCounter < 1) {
        buttonCounter = 1;
    } else if (buttonCounter > totalButtons) {
        buttonCounter = totalButtons;
    }

    // Actualizar la imagen de fondo y el botón
    updateBackgroundAndButton();
});
