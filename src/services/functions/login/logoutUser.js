export default function logoutUser(){
  let nav = document.getElementsByClassName('navigation')
  nav[0].style.display = 'none'
  nav[1].style.display = 'none'

  document.getElementById('email-input-login').value = ''
  document.getElementById('password-input-login').value = ''
 
  sessionStorage.removeItem('userActive')
  sessionStorage.removeItem('loginState')
}


