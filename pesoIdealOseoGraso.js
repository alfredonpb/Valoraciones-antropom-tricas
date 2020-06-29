// alert('Funciono bien pesoIdealOseoGraso')
// [(estatura en cm – 100) + 4 x la circunferencia de la muñeca (en cm)] / 2.
function pesoIdeal() {
    let tallaPesoIdeal = parseInt(document.getElementById('tallaPesoIdeal').value)
    // let tallaPI2 = (tallaPesoIdeal - 100)  
    let circunferencia = parseFloat(document.getElementById('circunferencia').value)
    // let circunferencia = (circunferencia / 2)
    let resultadoPesoIdeal = ((tallaPesoIdeal-100) + ( 4 * circunferencia))/2
    resultadoPesoIdeal.toFixed(2)
    document.getElementById('resultadoPesoIdeal').value = `${resultadoPesoIdeal}` 
}
let botonPesoIdeal = document.getElementById('botonPesoIdeal')
botonPesoIdeal.addEventListener("click",pesoIdeal)

// persona de 1,80 y de muñeca de 17 cm => peso ideal = 74 kilos, 
// una mujer de 1,60 mt y muñeca de 15,5 cm => peso ideal de 61 kg.

// ================================================== //
// Masa Osea: Según Von Döbeln, modificada por Rocha
// la estatura, diámetro biestiloideo de la muñeca y diámetro biepicondilar del fémur

//Fórmula= 3.02 x ([talla]2 X Diamétro_muñeca X Diamétro_femur x 400) elevado a la 0,712
function boneWeight(){
let boneSize = parseFloat(document.getElementById('tallaOsea').value)
let boneSize2 = (Math.pow(boneSize,2)).toFixed(2)
// console.log(boneSize2)
let wristDiameter = (parseFloat(document.getElementById('diametroMuneca').value)/100).toFixed(2)
// console.log(wristDiameter)
let diameterFemur = (parseFloat(document.getElementById('diametroFemur').value)/100).toFixed(2)
// console.log(diameterFemur)
let result =  (boneSize2 * wristDiameter * diameterFemur * 400).toFixed(2)
// console.log(result)
let result2 = (result * 0.712).toFixed(2)
// console.log(result2)
let resultboneWeight = 3.02 * result2
let valor = resultboneWeight.toFixed(2)
// console.log(valor)
document.getElementById("resultadoPesoOseo").value = `${valor} Kgs`
}

let botonPesoOseo = document.getElementById('botonPesoOseo')
botonPesoOseo.addEventListener("click", boneWeight)

// =============================================
// % de Grasa corporal:
// ∑ 2pan= suma de los panículos del tríceps y pantorrilla. 
// Sexo masculino - % de Grasa= (0,735 * ∑ de los 2 panículos) + 1.

function pesoGraso(){
    let paniculoTricepts = parseFloat(document.getElementById('paniculoTricepts').value)
    let paniculoPantorrilla = parseFloat(document.getElementById('paniculoPantorrilla').value)
    let sumatoria = paniculoTricepts+paniculoPantorrilla
    console.log(sumatoria)
    let porcentajeGrasa = (0.735 * sumatoria) + 1
    console.log(porcentajeGrasa)
    let resultPorcentajeGrasa = porcentajeGrasa.toFixed(2)
    console.log(resultPorcentajeGrasa)
    document.getElementById("resultadoPorcenPesoGraso").value = `${resultPorcentajeGrasa} %`

    let pesoCorporal = parseFloat( document.getElementById('pesoCorporal').value)
    let resultPesoGraso = (pesoCorporal * resultPorcentajeGrasa)/100
    document.getElementById("resultadoPesoGraso").value = `${resultPesoGraso} Kgs`
}

let botonPesoGraso = document.getElementById('botonPesoGraso')
botonPesoGraso.addEventListener("click", pesoGraso)

// =============================================
// Peso Magro:
// PesoMagro = peso Corporal - pesoGraso