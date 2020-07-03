// alert(`It´s rigth`)

function pesoIdeal() {
    let tallaPesoIdeal = parseInt(document.getElementById('tallaPesoIdeal').value)
    // let tallaPI2 = (tallaPesoIdeal - 100)  
    let circunferencia = parseFloat(document.getElementById('circunferencia').value)
    // let circunferencia = (circunferencia / 2)
    let resultadoPesoIdeal = ((tallaPesoIdeal-100) + ( 4 * circunferencia))/2
    resultadoPesoIdeal.toFixed(2)
    document.getElementById('resultadoPesoIdeal').value = `${resultadoPesoIdeal} Kgs` 
}
let botonPesoIdeal = document.getElementById('botonPesoIdeal')
botonPesoIdeal.addEventListener("click",pesoIdeal)

// =======================PESO ÓSEO=========================== //
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

// =======================PESO GRASO======================
function pesoGraso(){
    let paniculoTricepts = parseFloat(document.getElementById('paniculoTricepts').value)
    let paniculoPantorrilla = parseFloat(document.getElementById('paniculoPantorrilla').value)
    let sumatoria = paniculoTricepts+paniculoPantorrilla
    console.log(sumatoria)    
    // Checkbox test
    let formularioGrasa = document.getElementById('formularioGrasa')
    let sexo = formularioGrasa.sexo
            if(sexo[0].checked == true) {
                let porcentajeGrasaMujer = (0.610 * sumatoria) + 5
                console.log(porcentajeGrasaMujer)
                let resultPorcentajeGrasa = porcentajeGrasaMujer.toFixed(2)
                console.log(resultPorcentajeGrasa)
                document.getElementById("resultadoPorcenPesoGraso").value = `${resultPorcentajeGrasa} %`
            }else if(sexo[1].checked == true) {
                let porcentajeGrasaHombre = (0.735 * sumatoria) + 1
                console.log(porcentajeGrasaHombre)
                let resultPorcentajeGrasa = porcentajeGrasaHombre.toFixed(2)
                console.log(resultPorcentajeGrasa)
                document.getElementById("resultadoPorcenPesoGraso").value = `${resultPorcentajeGrasa} %`
            }else{
                alert('Por favor selecciona un sexo')
    }

    let pesoCorporal = parseFloat(document.getElementById('pesoCorporal').value)
    // console.log(pesoCorporal)
    let porcentajeGrasa = parseFloat(document.getElementById('resultadoPorcenPesoGraso').value)
    // console.log(porcentajeGrasa)
    let resultPesoGrasoKilos = parseFloat((pesoCorporal * porcentajeGrasa)/100)
    // console.log(resultPesoGrasoKilos)
    let resultPesoGrasoFinal = resultPesoGrasoKilos.toFixed(2)
    document.getElementById("resultadoPesoGraso").value = `${resultPesoGrasoFinal} Kgs`
}
let botonPesoGraso = document.getElementById('botonPesoGraso')
botonPesoGraso.addEventListener("click", pesoGraso)

// ===================PESO MAGRO=========================
function pesoMagro(){
    let pesoCorporal = parseFloat(document.getElementById('pesoCorporal').value)
    let pesoGrasa = parseFloat(document.getElementById('resultadoPesoGraso').value)
     console.log(pesoGrasa)
    resultPesoMagro = pesoCorporal - pesoGrasa
    document.getElementById("resultadoPesoMagro").value = `${resultPesoMagro} Kgs`
}
let botonPesoMagro = document.getElementById('botonPesoMagro')
botonPesoMagro.addEventListener('click', pesoMagro)


