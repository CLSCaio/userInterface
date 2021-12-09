export default function validarCep(inputType) {
  let cepDigitado = document.getElementById(`cep-input-${inputType}`).value
  let erroCep = document.getElementById(`cep-${inputType}-error`)
  
  let ehNumero =  /\d{8}$/

  let ehCep = /\d{5}-\d{3}/

  let stringVazia = cepDigitado === ''

  let ehValido = !stringVazia && ehNumero && ehCep

  if(!ehValido) {
    erroCep.style.display = 'flex'
  } else {
    erroCep.style.display = 'none'
    return ehValido;
  }
}