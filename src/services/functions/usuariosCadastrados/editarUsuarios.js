import usuarios from '../../api/usuarios.json'

export default function editarUsuarios(id) {
  id = parseInt(id)
  let userType = document.getElementById(`userType${id}`)

  let user = usuarios.find(resp => resp.id === id ? resp : '')

  for(let i=0; i<usuarios.length; i++) {
    if(usuarios[i].id === id) {
      usuarios.splice(i, 1)
    }
  }
  usuarios.push({
    "id": user.id ,
    "nome": user.nome,
    "data": user.data,
    "email": user.email,
    "cpf": user.cpf,
    "cep": user.cep,
    "senha": user.senha,
    "type": userType.value
  })
  
  localStorage.removeItem('usuarios')
  localStorage.setItem('usuarios', JSON.stringify(usuarios))
}
