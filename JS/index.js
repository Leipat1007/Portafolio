// cambio icono navegacion
let menuIcono = document.querySelector('#menu-icono');
let headNavegacion = document.querySelector('.headNavegacion');
menuIcono.onclick = () => {
    menuIcono.classList.toggle('bx-x');
    headNavegacion.classList.toggle('activo');
}
// scroll secciones
let secciones = document.querySelectorAll('section');
let linkNavegacion = document.querySelectorAll('header nav a');
window.onscroll = () => {
    secciones.forEach(sec => {
        let top = window.scrollY;
        let fuera = sec.offsetTop - 100;
        let alto = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= fuera && top < fuera + alto) {
            linkNavegacion.forEach(link => {
                link.classList.remove('activo');
                document.querySelector('header nav a[href*='+ id +']').classList.add('activo'); 
            });
        }
    });
    let head = document.querySelector('.head');
    head.classList.toggle('cambio', window.scrollY > 100);
    // remover los activo cuando se escrolee o se de click en las secciones
    menuIcono.classList.remove('bx-x');
    headNavegacion.classList.remove('activo');
}