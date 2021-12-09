import React, {useEffect, useState} from 'react'
import recarregarLoginPage from '../../../services/functions/outras/recarregarLoginPage'
import retonarFilmes from '../../../services/api/filmes'
import './styles.css'

const Filmes = () => {

  const [ user ] = useState(JSON.parse(sessionStorage.getItem('userActive')))

  useEffect(() => {
  }, [user])

  if(user === null) {
    return (
      <>
        <h1> Está página só pode ser acessada por um usuario <br />
          você sera redirecionado para a tela de login
        </h1>
        {recarregarLoginPage(5000)}
        
      </>
    )
    
  } else {
    return (
      <>
  
        <main id="filmes">
          {retonarFilmes()}
        </main>
  
      </>
    )
  }

  
}

export default Filmes