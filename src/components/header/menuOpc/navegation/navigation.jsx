import React from 'react'
import NavLinks from './styles'
import { Link } from 'react-router-dom'
import { UseOpenMenu } from '../../../../services/context/'

const Navegation = () => {
  const { setNameLogo, displayUsuariosCadastrados } = UseOpenMenu()
  
  return (
    <NavLinks className="navigation">
      <ul>
        <Link 
          to="/usuariosCadastrados" 
          onClick={() => setNameLogo('usuariosCadastrados')} 
          style={{display: displayUsuariosCadastrados}}
        > 
          <li>Usuarios Cadastrados</li>
        </Link>

        <Link to="/filmes" onClick={() => setNameLogo('Filmes')}> 
          <li>Filmes</li>
        </Link>

        <Link to="/noticias" onClick={() => setNameLogo('Noticias')}> 
          <li>Noticias</li>
        </Link>
        
      </ul>
    </NavLinks>
  ) 
}

export default Navegation