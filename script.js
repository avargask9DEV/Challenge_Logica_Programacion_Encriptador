/* Llaves utilizadas de encriptado

e= enter
i= imes
a= ai
o= ober
u= ufat
*/

// Declarar Variables---
var input_encriptar    = document.querySelector("#input-encriptar");
var encriptarBtn       = document.querySelector("#encriptar-btn");
var desencriptarBtn    = document.querySelector("#desencriptar-btn");
var answer             = document.querySelector("#answer");
var copyBtn            = document.querySelector("#copyBtn");
const error_message    = document.querySelector("#error_message"); // Error message


// Crear el escuchador del evento btn encriptar
encriptarBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let inputEncriptar = document.getElementById("input-encriptar").value;
    document.getElementById("input-encriptar").value = '';
    encriptandoMsg(inputEncriptar);
});

// Crear el escuchador del evento btn desencriptar
    desencriptarBtn.addEventListener("click", function (event){
    event.preventDefault();
    let inputEncriptar= document.getElementById('input-encriptar').value;
    desencriptandoMsg(inputEncriptar);

});
// Crear el escuchador del evento btn copiar
    copyBtn.addEventListener("click", function (event) {
    event.preventDefault();
    rowscopy();
    document.getElementById("answer").value = '';

});

// Funcion para el encriptado 
function encriptandoMsg (inputEncriptar){
    let encriptar = inputEncriptar.replace (/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    document.getElementById("answer").value = encriptar
}
// funcion boton copiar
function rowscopy() {
    let inputEncriptar = document.getElementById('answer');
    inputEncriptar.select();
    document.execCommand('copy');
}
// Funcion para e desencriptado 
function desencriptandoMsg (inputEncriptar){
    let deseencriptar = inputEncriptar.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/gi, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    document.getElementById("answer").value = deseencriptar

}


//validar caracteres
const validateInput = (input_encriptar) => {
    let regex = /[A-ZÁÉÍÓÚáéíóúñÑ]/g;
    let valor;
  
    if (regex.test(input_encriptar) || input_encriptar.length == 0) {
      valor = true;
    } else {
      valor = false;
    }
  
    if (valor && input_encriptar.length > 0) {
      showErrorMessage(
        "¡ALERTA!! No se permite acentos ni caracteres especiales, el texto debe ir en minúsculas"
        
      );
    } else if (input_encriptar.length==0 || input_encriptar.replace(" ", "").length == 0) {

      showErrorMessage("Ingresar el texto");

    }else {
      hideErrorMessage();
    }


    return valor;
  };

  input_encriptar.addEventListener("keyup", () => {
    if (input_encriptar.value.length > 0) {
      validateInput(input_encriptar.value);
    } else {
      hideErrorMessage();
    }
  });
  

  const showErrorMessage = (input_encriptar) => {
    // Mostrar mensaje del error
    error_message.style.display = "block";
    error_message.innerHTML = input_encriptar;
  };
  

  const hideErrorMessage = () => {
    error_message.style.display = "none";
  };
  

