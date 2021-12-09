import React, {useEffect, useState} from 'react'
import Ciencia from "./ciencia"
import Tecnologia from "./tecnologia"
import Saude from './saude'
import Politica from "./politica"
import './styles.css'
import recarregarLoginPage from '../../../services/functions/outras/recarregarLoginPage'

export default function NoticiasHome() {

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
      <div className='noticiasHome'>
        <div className="containerPrincipalHome" id="section">
  
        
          <Ciencia/>
          <Tecnologia/>
          <Saude/>
          <Politica/>
      
  
        </div>
        <div className="containerPrincipalHome" id="conteudo">
        </div>
      </div>
    )
  }
  
}