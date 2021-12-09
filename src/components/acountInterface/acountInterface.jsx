import React from "react"
import InputMask from 'react-input-mask'
import { UseOpenMenu } from "../../services/context"
import { ContainerCadastro, Cadastro, ButtonCadastro } from './styles'
import { Link } from 'react-router-dom'
import validarUsuario from '../../services/functions/validacoes/validarUsuario'

export default function AcountInterface({input, buttonSave, path}) {
  const { 
    valueName ,setValueName,
    valueCpf, setValueCpf,
    valueCep, setValueCep, 
    valueEmail, setValueEmail, 
    valueSenha, setValueSenha, 
    valueData, setValueData,
    setNameLogo, buttonTudoOk
  } = UseOpenMenu()

  return (
    
    
    <ContainerCadastro >
    <h1>CRIE AQUI SUA CONTA</h1>

    <Cadastro >
    <form action="cadastro" >
      <div>

        <label htmlFor="name">Nome Completo*</label>
        <input id={`name-input-${input}`}   type="text" value={valueName} 
          onChange={(e) => setValueName(e.target.value)} 
          placeholder="Exemplo: Nome Sobrenome"/>
        <span 
          id={`name-${input}-error`}
          className="error" 

        >Nome inválido</span>
      </div>
      
      <div>
        <label htmlFor="date">Data de Nascimento*</label>
        <InputMask mask="99/99/9999" id={`date-input-${input}`}  
          type="text" placeholder="Exemplo: DD/MM/AAAA" maskChar=''
          value={valueData} onChange={(e) => setValueData(e.target.value)}
        />
        <span 
          id={`date-${input}-error`} 
          className="error" 
        >Data inválida</span>
      </div>

      <div>
        <label htmlFor="email">Email*</label>
        <input  type="email" name="email" id={`email-input-${input}`} 
            placeholder="Exemplo: email@email.com"
            value={valueEmail} onChange={(e) => setValueEmail(e.target.value)}
          />   
        <span 
          id={`email-${input}-error`} 
          className="error" 
        >Email inválido</span>
      </div>

      <div>
        <label htmlFor="cep">CEP*</label>
        <InputMask mask="99999-999" type="cep" name="cep" id={`cep-input-${input}`}
          placeholder="Exemplo: 12548-694" maskChar=''
          value={valueCep} onChange={(e) => setValueCep(e.target.value)}
        />
        <span 
          id={`cep-${input}-error`}
          className="error" 
        >CEP inválido</span>
      </div>

      <div>
        <label htmlFor="cpf">CPF*</label>
        <InputMask mask="999.999.999-99"  type="cpf" name="cpf" id={`cpf-input-${input}`}
          placeholder="Exemplo: 402.987.320-99" maskChar=''
          value={valueCpf} onChange={(e) => setValueCpf(e.target.value)}
        />
        <span 
          id={`cpf-${input}-error`}
          className="error" 
        >CPF inválido</span>
      </div>

      <div>
        <label htmlFor="password">Senha*</label>
        <input id={`password-input-${input}`}  type="password"  
        placeholder="Exemplo: @Mar123ki" value={valueSenha} onChange={(e) => setValueSenha(e.target.value)}/>
        <span 
          id={`password-${input}-error`} 
          className="error"
        > Senha inválida </span>
      </div>
    </form>

      <ButtonCadastro>
        <button onClick={() => validarUsuario(input)} > {buttonSave} </button>

        
        <Link to={path} className="btn" onClick={() => setNameLogo('Home')}> 
          <button id="btnAcountInterface">
            {buttonTudoOk} 
          </button>
        </Link>
      </ButtonCadastro>

    </Cadastro>  
 </ContainerCadastro>
    
  )
}