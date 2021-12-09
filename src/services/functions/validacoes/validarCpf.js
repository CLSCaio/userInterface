export default function validarCpf(inputType) {
  let cpfDigitado = document.getElementById(`cpf-input-${inputType}`).value
  let erroCpf = document.getElementById(`cpf-${inputType}-error`)
  
  let ehNumero =  /\d{11}$/

  let ehCPF = /(\d{3}\.){2}\d{3}-\d{2}/

  let stringVazia = cpfDigitado === ''

  let ehValido = !stringVazia && ehNumero && ehCPF

  if(!ehValido) {
    erroCpf.style.display = 'flex'



  } else {
    erroCpf.style.display = 'none'
    return ehValido;
  }
}