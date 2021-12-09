export default function validarSenha(inputType){
  let senhaDigitada = document.getElementById(`password-input-${inputType}`).value
  let erroSenha =  document.getElementById(`password-${inputType}-error`)

  let listaCaracteres = senhaDigitada.split('');

  let letras = listaCaracteres.filter( char => char.toLowerCase() !== char.toUpperCase() );

  let possuiLetraMaiuscula = letras.some( l => l.toUpperCase() === l ); 
  let possuiLetraMinuscula = letras.some( l => l.toLowerCase() === l );

  let possuiCharEspecial = listaCaracteres.some( char => char.toLowerCase() === char.toUpperCase() && isNaN(parseInt(char)) );
  let possuiNumero = listaCaracteres.some( char => char.toLowerCase() === char.toUpperCase() && !isNaN(parseInt(char)) );

  let possuiOitoCaracteres = senhaDigitada.length >= 8;

  let naoPossuiEspacos = !senhaDigitada.includes(' ');

  let ehValido = possuiOitoCaracteres && possuiLetraMaiuscula && possuiLetraMinuscula && 
    possuiCharEspecial && possuiNumero && naoPossuiEspacos;

  if(ehValido === false) {
    erroSenha.style.display = 'flex'
  } else {
    erroSenha.style.display = 'none'
    return ehValido;
  }
}