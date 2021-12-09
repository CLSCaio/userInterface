import checarCookies from "../functions/outras/checarCookies"
import checarUsersState from "../functions/outras/checarUsersState"
import  usuarios  from '../api/usuarios.json'

export default function APP() {
  checarCookies()
  checarUsersState()

  const users = localStorage.getItem('usuarios')
  if(users === null) {
    return localStorage.setItem('usuarios', JSON.stringify(usuarios))

  }else {
    JSON.parse(users).forEach(resp =>  {
      for(let i=0; i<usuarios.length; i++) {
        if(usuarios[i].id === resp.id) {
          usuarios.splice(i, 1)
        }
      }
      usuarios.push({
        "id": resp.id ,
        "nome": resp.nome,
        "data": resp.data,
        "email": resp.email,
        "cpf": resp.cpf,
        "cep": resp.cep,
        "senha": resp.senha,
        "type": resp.type
      })
    })
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
  } 
}