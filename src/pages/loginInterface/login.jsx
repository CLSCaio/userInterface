import React, { useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { LoginInterfaceDiv, DivInputs, DivLinks  } from './styles'
import { UseOpenMenu } from '../../services/context'
import recarregarLoginPage from "../../services/functions/outras/recarregarLoginPage"
import Logar from "../../services/functions/login/logar"

export default function LoginInterface() {
  const { setNameLogo, setButtonTudoOk } = UseOpenMenu() 

  const userActive = JSON.parse(sessionStorage.getItem('userActive'))
  const [value, setValue] = useState('')
  
  const navigation = useNavigate()

  useEffect(() => {
    setNameLogo('Home')
  })

  function submite() {
    setButtonTudoOk('Já tem login?')
    setNameLogo('Cadastro de usuario')
  }

  const submit = () => {
    const tryLogin = Logar()

    if(tryLogin) {
      navigation('/homePage')
    }
  }

  if(userActive !== null) {

    return(
      <>
        <h1> Sessao encerrada, você sera redirecionado para a tela de login! </h1>
        {recarregarLoginPage(2000)}
      </>
    )

  } else {

    return (
      <LoginInterfaceDiv id="login" >
      <h1>Login do Sistema</h1>
      
        <DivInputs>
          <form>
              <div>
                <p>E-mail</p>
                <input type="email" 
                  name="email" id="email-input-login" 
                  value={value} 
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
              <div>
                <p>Senha</p>
                <input type="password" name="password" id="password-input-login" />
              </div>
              
              <div>
                <p>Tipo de conta</p>
                <select name="select" id="tipoConta">
                  <option value=""> -------- Selecione o tipo da conta -------- </option>
                  <option value="admin"> -------- Administrador -------- </option>
                  <option value="user"> -------- Usuario -------- </option>
                </select>
              </div>
          </form> 

          <p >
            <button id="btnLogin" onClick={() => submit()}>  Login </button>
          </p>
         
        </DivInputs>
  
        <DivLinks >
            <Link to="/esqueceuSenha" onClick={() => setNameLogo('Recuperação de senha')}>Esqueceu a senha? </Link>
            <Link to="/userRegistration" onClick={() => submite()}> Não possui cadastro? </Link>
        </DivLinks>
      </LoginInterfaceDiv>
    ) 

    
  }
}