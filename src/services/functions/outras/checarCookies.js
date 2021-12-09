export default function checarCookies() {
  if(navigator.cookieEnabled === true) {
  } else {
    let texto = alert('Por favor ative os cookies para acessar os recursos do site!')
    return texto
  }
}