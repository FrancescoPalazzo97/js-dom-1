const lampOn = document.getElementById('lamp-on'); // Mi vado a prendere l'immagine tramite ID
const lampOff = document.getElementById('lamp-off'); // Mi vado a prendere l'immagine tramite ID
const btn = document.querySelector('.btn'); // Mi vado a prendere il button tramite classe

btn.addEventListener('click', ()=>{
    lampOff.className = 'd-none'; // Tramite click sul button l'immagine della lampadina spenta diventa display: none
    lampOn.className = 'd-block'; // Invece la lampadina accesa diventa display: block
} )