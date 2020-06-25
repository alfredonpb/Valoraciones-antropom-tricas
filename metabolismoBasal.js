// alert(`Funciono Metabolismo Basal`) 
// METABOLISMO BASAl
// VARIABLES del Radio button:
// let sexoHombre = document.getElementById('hombreMB')
// let sexoMujer = document.getElementById('mujerMB')
// let radios = document.getElementsByName('genderS').value

  
function metabolismoMujer(){
    // Mujer MB = (10 x peso en kg) + (6.25 × altura en cm) - (5 × edad en años) - 161
let pesoMB = parseFloat(document.getElementById('pesoMB').value)
let tallaMB = parseFloat(document.getElementById('tallaMB').value)
let edadMB = parseFloat(document.getElementById('edadMB').value)              
let metabolismoMujer = parseFloat((10*pesoMB)+(6.25*tallaMB)-(5*edadMB)-161).toFixed(0); 
    // Imput para mostrar el resultado:
document.getElementById('resultadoMB').value = `${metabolismoMujer} Kilocalorías`
}
let botonMujer = document.getElementById('botonMujer')
botonMujer.addEventListener("click",metabolismoMujer)

function metabolismoHombre(){
let pesoMB = parseFloat(document.getElementById('pesoMB').value)
let tallaMB = parseFloat(document.getElementById('tallaMB').value)
let edadMB = parseFloat(document.getElementById('edadMB').value) 
    // Hombre MB = (10 x peso en kg) + (6.25 × altura en cm) - (5 × edad en años) + 5       
let metabolismoHombre = parseFloat((10*pesoMB)+(6.25*tallaMB)-(5*edadMB)+5).toFixed(0);
    // Imput para mostrar el resultado:
document.getElementById('resultadoMB').value = `${metabolismoHombre} Kilocalorías`
}    
// ID del boton de cálculo y Evento
var botonHombre = document.getElementById('botonHombre')
botonHombre.addEventListener("click",metabolismoHombre)

// Tasa metabólica
function tasaMetabolica() {
    let MB = parseFloat(document.getElementById('resultadoMB').value)
    let actividad = parseFloat(document.getElementById('actividad').value)
    let tasaMetabolica = parseFloat(MB * actividad).toFixed(2)
document.getElementById('muestraTasaMetabolica').value = `${tasaMetabolica} Kilocalorías/día`
}
// ID del  botonActividad
var botonActividad = document.getElementById('botonActividad')
botonActividad.addEventListener("click",tasaMetabolica)
