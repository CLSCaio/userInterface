export default function esqueceuSenha() {
  const usuarios = JSON.parse(localStorage.getItem('usuarios'))

  const inputData = document.getElementById('date-input-esqueceuSenha')
  const inputEmail = document.getElementById('email-input-esqueceuSenha')
  const inputCpf = document.getElementById('cpf-input-esqueceuSenha')
  const inputSenha = document.getElementById('password-input-esqueceuSenha')

  const dadosValidos = document.getElementById('dadosValidos')
  const dadosInvalidos = document.getElementById('dadosInvalidos')
  
  let procurar = usuarios.find(resp => 
    resp.email === inputEmail.value && resp.cpf === inputCpf.value && resp.data === inputData.value
  )

  let user = usuarios.find(resp => resp.email === inputEmail.value ? resp : '')

  if(procurar) {
    dadosValidos.style.display = 'flex'
    dadosInvalidos.style.display = "none"
    inputSenha.value = user.senha
  } else {
    dadosInvalidos.style.display = "flex"
    dadosValidos.style.display = 'none'
  }
  
}


