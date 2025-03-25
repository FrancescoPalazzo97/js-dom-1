const lampOn = document.getElementById('lamp-on'); // Mi vado a prendere l'immagine tramite ID
const lampOff = document.getElementById('lamp-off'); // Mi vado a prendere l'immagine tramite ID
const btn = document.querySelector('.btn'); // Mi vado a prendere il button tramite classe

// btn.addEventListener('click', ()=>{
//     if (lampOff.className === 'd-block') {
//         lampOff.className = 'd-none'; // Tramite click sul button l'immagine della lampadina spenta diventa display: none
//         lampOn.className = 'd-block'; // Invece la lampadina accesa diventa display: block
//         // btn.innerText = `Accendi`
//         btn.innerText = 'Spegni'
//     }
//     else {
//         lampOff.className = 'd-block'; // Tramite click sul button l'immagine della lampadina spenta diventa display: block
//         lampOn.className = 'd-none'; // Invece la lampadina accesa diventa display: none
//         btn.innerText = 'Accendi'
//     }
// } )
// ALTERNATIVA USANDO .INCLUDES()
btn.addEventListener('click', ()=>{
    if (lampOff.className.includes(`d-block`)) {
        lampOff.className = 'd-none'; // Tramite click sul button l'immagine della lampadina spenta diventa display: none
        lampOn.className = 'd-block'; // Invece la lampadina accesa diventa display: block
        // btn.innerText = `Accendi`
        btn.innerText = 'Spegni'
    }
    else {
        lampOff.className = 'd-block'; // Tramite click sul button l'immagine della lampadina spenta diventa display: block
        lampOn.className = 'd-none'; // Invece la lampadina accesa diventa display: none
        btn.innerText = 'Accendi'
    }
} )