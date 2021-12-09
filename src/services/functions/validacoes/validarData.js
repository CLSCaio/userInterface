import moment from "moment";

export default function validarData(inputType) { 
  let inputData = document.getElementById(`date-input-${inputType}`)
  let erroData = document.getElementById(`date-${inputType}-error`)

  let dataDigitada = inputData.value

  let naoTemLetras = dataDigitada.split('').some(caracter => caracter.toUpperCase() !== caracter.toLowerCase())

  let dataConvertida = moment(dataDigitada, 'DDMMYYYY');

  let dezoitoAnosAtras = moment().diff(dataConvertida, 'years') >= 18;

  let dataAnteriorHoje = dataConvertida.isBefore(moment());

  let ehValido = dataConvertida.isValid() && dataAnteriorHoje && dezoitoAnosAtras && dataDigitada.length === 10 && !naoTemLetras; // 10/05/2001
  if(!ehValido) {
      erroData.style.display = 'flex'
  } else {
    erroData.style.display = 'none'
    return ehValido;
  }
}