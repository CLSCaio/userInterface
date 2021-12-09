export default function Logar() {
  let header = document.getElementById("header")
  let emailDigitado = document.getElementById('email-input-login').value
  let senhaDigitada = document.getElementById('password-input-login').value 
  let select = document.getElementById('tipoConta')
  let users = JSON.parse(localStorage.getItem('usuarios'))
  
  if(select.value !== '') {

    let userSessao = users.find(resp => resp.email === emailDigitado ? resp : '')
    let user = users.find(resp => resp.email === emailDigitado && resp.senha === senhaDigitada && resp.type === select.value)
  
    if(user) {
      sessionStorage.setItem('userActive', JSON.stringify(userSessao))
      header.style.display = 'flex'
      return true
    }else {
      alert('E-mail, senha ou tipo de conta incorreto')
      return false
    }   
  
  }else {
    alert('Preencha todos os campos')
  }
}