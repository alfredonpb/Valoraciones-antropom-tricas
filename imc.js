 // alert('funciono')
// INDICE DE MASA CORPORAL
function indiceMC(){
var peso = parseFloat(document.getElementById('peso').value)
var estaturaimc = parseFloat(document.getElementById('estaturaimc').value)
var tallaImc = parseFloat(estaturaimc*estaturaimc)
var resultado = parseFloat((peso/tallaImc).toFixed(2))
document.getElementById('resultado').value = `${resultado} Kg/m2`

// Muestro la Valoración según el resultado del IMC
// en el input del lado derecho
// despues de ecutar a función mostrarValoracion
var valoracion  = document.getElementById('valoracion')
    if(resultado < 18.5){
        valoracion.textContent = 'Tu peso es Bajo'         
    }else if(resultado >= 18.5 && resultado <= 24.9){
        valoracion.innerHTML = 'Tu peso es Normal'       
    }else if (resultado >= 25 && resultado <= 26.9){
        valoracion.textContent = 'Tienes Sobrepeso Grado 1'
    }else if (resultado >= 27 && resultado <= 29.9){
        valoracion.textContent = 'Tienes Sobrepeso Grado 2'
    }else if (resultado >= 30 && resultado <= 34.9){
        valoracion.textContent = 'Tienes Obesidad Tipo 1'
    }else if (resultado >= 35 && resultado <= 39.9){
        valoracion.textContent = 'Tienes Obesidad Tipo 2'
    }else if (resultado >= 40 && resultado<= 49.9){
        valoracion.textContent = 'Tienes Obesidad Tipo 3 (Mórbida)'
    }else if (resultado >= 50){
        valoracion.textContent = 'Tienes Obesidad Tipo 4 (Extrema)'
    }else{
        valoracion.textContent = 'Por favor Revisa los datos introducidos'
    }
}
var botonImc = document.getElementById('imc')
botonImc.addEventListener("click",indiceMC)








//  var nombre = document.getElementById("nombre");
//  var apellido = document.getElementById("apellido");
//  var edad = document.getElementById("edad");
//  var boton = document.getElementById("boton");
//  boton.addEventListener("click", mostrarInformacion);

//  function mostrarInformacion(){
//      var resultado = (`Estimad@ ${nombre.value} ${apellido.value} a tus ${edad.value} años, deberías de ir a trabajar que necesitamos facturar y traeme un Café`)
//      //document.getElementById("resultado").value = resultado;
//      document.getElementById("resultado").innerHTML = resultado;

//============================================

