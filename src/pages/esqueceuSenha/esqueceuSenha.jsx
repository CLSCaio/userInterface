import React, {useState, useEffect} from "react"
import InputMask from 'react-input-mask'
import { EsqueceuSenhaContainer, LinkButtons } from './styles'
import { UseOpenMenu } from "../../services/context"
import { Link } from "react-router-dom"
import esqueceuSenha from "../../services/functions/login/esqueceuSenha"

export default function EsqueceuSenha() {
  const [valueData, setValueData] = useState('')
  const [valueEmail, setValueEmail] = useState('')
  const [valueCpf, setValueCpf] = useState('')
  const [valueSenha] = useState('')
  const { setNameLogo } = UseOpenMenu()

  useEffect(() => {
    setNameLogo('Recuperação de senha')
  })

  function mostrarSenha() {
    const inputSenha = document.getElementById("password-input-esqueceuSenha")
    inputSenha.setAttribute('type', 'text')
  }

  return(

    <EsqueceuSenhaContainer>
      <h1> Esqueceu a senha </h1>

      <form action="recuperar">
        
        <div>
          <label htmlFor="date">Data de Nascimento*</label>
          <InputMask mask="99/99/9999" id={`date-input-esqueceuSenha`}  
            type="text"  maskChar=''
            value={valueData} onChange={(e) => setValueData(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email*</label>
          <input  type="email" name="email" id={`email-input-esqueceuSenha`} 
            value={valueEmail} onChange={(e) => setValueEmail(e.target.value)}
          />   
        </div>

        <div>
          <label htmlFor="cpf">CPF*</label>
          <InputMask mask="999.999.999-99"  type="cpf" name="cpf" id={`cpf-input-esqueceuSenha`}
            value={valueCpf} onChange={(e) => setValueCpf(e.target.value)}
            maskChar=''
          />
        </div>

        <div>
          <label htmlFor="text">Sua senha é: </label>
          <input id={`password-input-esqueceuSenha`}  type="password"
            value={valueSenha} onClick={() => mostrarSenha()}
          />
          <span 
            id={`dadosValidos`} 
            className="error" 
          >
            Clique no campo para visualizar sua senha
          </span>

          <span 
            id={`dadosInvalidos`} 
            className="error" 
          >
            Dados incorretos, por favor conferir
          </span>
        </div>
      </form>

      <LinkButtons>

       
        <button onClick={() => esqueceuSenha()}>
          Recuperar senha
        </button>
       

        <Link to="/login">
          <button onClick={() => setNameLogo('Home')}>
            Voltar ao login
          </button>
        </Link>

      </LinkButtons>
    </EsqueceuSenhaContainer>
  )
}