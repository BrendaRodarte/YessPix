// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los elementos de la galería
    const galeriaItems = document.querySelectorAll('.galeria-item');

    // Iterar sobre cada elemento de la galería
    galeriaItems.forEach(item => {
        // Obtener la descripción dentro del galeria-item
        const description = item.querySelector('.description');

        // Agregar un evento mouseenter para mostrar la descripción
        item.addEventListener('mouseenter', () => {
            description.style.opacity = '1'; // Mostrar la descripción
        });

        // Agregar un evento mouseleave para ocultar la descripción
        item.addEventListener('mouseleave', () => {
            description.style.opacity = '0'; // Ocultar la descripción
        });
    });
});