export default function limparCampos(inputType) {
  let nomeInput = document.getElementById(`name-input-${inputType}`)
  let dataInput = document.getElementById(`date-input-${inputType}`)
  let emailInput = document.getElementById(`email-input-${inputType}`)
  let senhaInput = document.getElementById(`password-input-${inputType}`)
  let cpfDigitado = document.getElementById(`cpf-input-${inputType}`)
  let cepDigitado = document.getElementById(`cep-input-${inputType}`)
  
  let campos = [nomeInput,dataInput,emailInput,senhaInput, cpfDigitado, cepDigitado]
  campos.map(i => {
    return i.value = ''
  })
}

