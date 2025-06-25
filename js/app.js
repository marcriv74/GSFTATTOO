// ampliar imagen al hacer clic

const imagenes = document.querySelectorAll('.galeria img');

imagenes.forEach(imagen => {
    imagen.addEventListener('click', (e) => {

// Quitar la clase ampliada de todas las imágenes
        imagenes.forEach(img => {
            if (img !== imagen) {
            img.classList.remove('ampliada');
        }
    });

// Alternar la clase en la imagen clicada
    imagen.classList.toggle('ampliada');
    }); 
});

//menu hamburguesa

const boton = document.getElementById('hamburguesa');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

boton.addEventListener('click', () => {
menu.classList.toggle('activo');
overlay.classList.toggle('activo');
});
overlay.addEventListener('click', () => {
menu.classList.remove('activo');
overlay.classList.remove('activo');});
