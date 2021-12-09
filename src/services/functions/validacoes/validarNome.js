export default function validarNome(inputType) {
  let nomeDigitado = document.getElementById(`name-input-${inputType}`).value
  let erroNome = document.getElementById(`name-${inputType}-error`)

  let arrayNome = [...nomeDigitado]
  
  let somenteLetras = arrayNome.every(letra => letra.toLowerCase() !== letra.toUpperCase())
  let stringVazia = nomeDigitado === ''

  let ehValido = !somenteLetras && !stringVazia

  if(ehValido === false) {
    erroNome.style.display = 'flex'
  } else {
    erroNome.style.display = 'none'
    return ehValido;
  }
}