function contextura(){
    let estatura = parseInt(document.getElementById('tallaContextura').value)
    let diametroCodo = parseInt(document.getElementById('codoContextura').value) *10
    let contextura = (diametroCodo / estatura) *100
    let resultContextura = contextura.toFixed(2)
    // console.log(contextura)
    document.getElementById('resultadoContextura').value = resultContextura
}
let botonContextura = document.getElementById('botonContextura')
botonContextura.addEventListener('click',contextura)
