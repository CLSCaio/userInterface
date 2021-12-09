import React, {useState} from 'react'
import recarregarLoginPage from '../../../services/functions/outras/recarregarLoginPage'
import usuarios from '../../../services/api/usuarios.json'
import { AiFillDelete, AiFillSave } from 'react-icons/ai'
import { TableUsuariosCadastrados } from './styles'
import { useNavigate  } from 'react-router'
import { UseOpenMenu } from '../../../services/context'
import editarUsuarios from '../../../services/functions/usuariosCadastrados/editarUsuarios'
import excluirUsuario from '../../../services/functions/usuariosCadastrados/excluirUsuario'

const UsuariosCadastrados = () => {

  const [ user ] = useState(JSON.parse(sessionStorage.getItem('userActive')))
  const navigate = useNavigate()
  const { setButtonTudoOk } = UseOpenMenu()

  function submite() {
    setButtonTudoOk('Voltar')
    navigate('/userRegistration')
  }

  function submiteTwo(e) {
    let resp = window.confirm('Voce realmente deseja excluir o perfil de usuario?')
    if(resp) {
      excluirUsuario(e.currentTarget.id)
      navigate('/homePage')
      navigate('/usuariosCadastrados')
    }
  }

  if(user === null) {
    return (
      <>
        <h1> Está página só pode ser acessada por um administrador <br />
          você sera redirecionado para a tela de login
        </h1>
        {recarregarLoginPage(5000)}
        
      </>
    )
    
  } else if(user.type === 'admin') {
    return (

      
     <TableUsuariosCadastrados>
       <h1> Tabela de usuarios </h1>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Nome</td>
            <td>E-mail</td>
            <td>CPF</td>
            <td>Tipo de conta</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody >
          { usuarios.map(u => {
            return (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.nome}</td>
                <td>{u.email}</td>
                <td>{u.cpf}</td>
                <td> 
                  <select name="select" id={`userType${u.id}`}>
                    <option 
                      value={u.type}
                    >
                      {u.type}
                    </option>
                    <option 
                      value={u.type === 'admin' ? 'user' : 'admin'}
                    >
                      {u.type === 'admin' ? 'user' : 'admin'} 
                    </option>
                  </select>  
                </td>
                <td>
                  <div>

                    <button 
                      className="saveUser" id={u.id}
                      onClick={(e) => editarUsuarios(e.currentTarget.id)}
                    >
                      <AiFillSave />
                    </button>
                    

                    <button 
                      className="deletUser" id={u.id}
                      onClick={(e) => submiteTwo(e)}
                    >
                      <AiFillDelete />
                    </button>
                    
                  </div>
                  
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <button
        onClick={() => submite()}
      >
        Criar um usuario
      </button>
     </TableUsuariosCadastrados>
    )
  }

  
}

export default UsuariosCadastrados