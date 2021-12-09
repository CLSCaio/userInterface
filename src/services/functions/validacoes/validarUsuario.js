import validarSenha from "./validarSenha";
import validarNome from "./validarNome";
import validarEmail from "./validarEmail";
import cadastrarUsuario from "../login/cadastrarUsuario";
import limparCampos from "../outras/limparCampos";
import validarData from "./validarData";
import validarCpf from "./validarCpf";
import validarCep from "./validarCep";


export default function validarUsuario(inputType) {

  validarData(inputType)
  validarEmail(inputType)
  validarSenha(inputType)
  validarNome(inputType)
  validarCpf(inputType)
  validarCep(inputType)
 
  let cadastroValido = validarData(inputType) && validarEmail(inputType) && 
  validarSenha(inputType) && validarNome(inputType) && validarCpf(inputType) && validarCep(inputType)

  if(!cadastroValido) {
    alert('Cadastro Inválido') 
  } else{
    cadastrarUsuario(inputType);
    limparCampos(inputType)
  }
}