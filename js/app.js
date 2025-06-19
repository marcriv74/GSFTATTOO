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

//crear un efecto cuando pases por encima
/*  
imagen.addEventListener('mouseenter', () => {
    if(!imagen.classList.contains("ampliar"))
    imagen.classList.add('hover-activo');
});

imagen.addEventListener('mouseleave', () => {
    imagen.classList.remove('hover-activo');
    });*/ 
});
