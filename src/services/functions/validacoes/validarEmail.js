export default function validarEmail(inputType) {
    let emailDigitado = document.getElementById(`email-input-${inputType}`).value
    let erroEmail = document.getElementById(`email-${inputType}-error`)

    let listaCaracteres = emailDigitado.split('');

    let emailSplit = emailDigitado.split('@');
    
    let possuiArroba = emailSplit.length > 1;

    let dominioEmail = possuiArroba ? emailSplit[1] : '';
    let dominioEmailSplit = dominioEmail.split('.');

    let possuiPontosNoDominio = dominioEmailSplit.length > 1;

    let possuiCaracteresEntrePontos = dominioEmailSplit.every( d => d.length > 1 );

    let comecaComLetra = listaCaracteres.length ? listaCaracteres[0].toUpperCase() !== listaCaracteres[0].toLowerCase() : false;

    let diferenteVazio = emailDigitado !== '' || ' '

    let ehValido = possuiArroba && possuiPontosNoDominio && possuiCaracteresEntrePontos && comecaComLetra && diferenteVazio;
    if(!ehValido) {
        erroEmail.style.display = 'flex'
    } else {
        erroEmail.style.display = 'none'
        return ehValido;
    }
}