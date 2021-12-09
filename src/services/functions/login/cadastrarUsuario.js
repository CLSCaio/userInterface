import usuarios from '../../api/usuarios.json'

export default function cadastrarUsuario(inputType) {
  let users =  JSON.parse(localStorage.getItem('usuarios')) 
  let userActive = JSON.parse(sessionStorage.getItem('userActive'))

  let nomeInput = document.getElementById(`name-input-${inputType}`).value
  let dataInput = document.getElementById(`date-input-${inputType}`).value
  let emailInput = document.getElementById(`email-input-${inputType}`).value
  let senhaInput = document.getElementById(`password-input-${inputType}`).value
  let cpfInput = document.getElementById(`cpf-input-${inputType}`).value
  let cepInput = document.getElementById(`cep-input-${inputType}`).value

  if(inputType === 'userInterface') {
    for(let i=0; i<usuarios.length; i++) {
      if(usuarios[i].id === userActive.id) {
        usuarios.splice(i, 1)
      }
    }
    usuarios.push({
      "id": usuarios.length + 1 ,
      "nome": nomeInput,
      "data": dataInput,
      "email": emailInput,
      "cpf": cpfInput,
      "cep": cepInput,
      "senha": senhaInput,
      "type": userActive.type
    })

    let newUser = usuarios.find(resp => resp.id === userActive.id)
    sessionStorage.setItem('userActive', JSON.stringify(newUser))

  } else {
    let user = users.find(resp => resp.email === emailInput)
    if(user) {
      alert('E-mail já existe no nosso banco de dados, por favor faça o login')
  
    } else {
      usuarios.push({
        "id": usuarios.length + 1 ,
        "nome": nomeInput,
        "data": dataInput,
        "email": emailInput,
        "cpf": cpfInput,
        "cep": cepInput,
        "senha": senhaInput,
        "type": "user"
      })
    } 
  }

  alert('Cadastro realizado com sucesso')
  localStorage.setItem('usuarios', JSON.stringify(usuarios))
}
  

  


 
