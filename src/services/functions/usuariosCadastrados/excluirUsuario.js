import usuarios from '../../api/usuarios.json'

export default function excluirUsuario(id) {
  id = parseInt(id)

  for(let i=0; i<usuarios.length; i++) {
    if(usuarios[i].id === id) {
      usuarios.splice(i, 1)
    }
  }

  localStorage.removeItem('usuarios')
  localStorage.setItem('usuarios', JSON.stringify(usuarios))
}