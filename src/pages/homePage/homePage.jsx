import React, {useEffect} from "react"
import { HomePageDiv, CardsHomePage } from "./styles"
import { FaUsersCog } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { UseOpenMenu } from "../../services/context"
import { AiFillEdit } from 'react-icons/ai'
import { RiMovieFill } from 'react-icons/ri'
import { HiDocumentReport } from 'react-icons/hi'
import recarregarLoginPage from "../../services/functions/outras/recarregarLoginPage"
import { useNavigate } from "react-router"
import { useMenuContext } from "../../services/context/context"

export default function HomePage () {
  const { setNameLogo, setDisplayUsuariosCadastrados, displayUsuariosCadastrados } = UseOpenMenu()
  const {setValueCep, setValueCpf, setValueData, setValueEmail, setValueSenha, setValueName } = useMenuContext()
  const user = JSON.parse(sessionStorage.getItem('userActive'))
  const navigate = useNavigate()

  useEffect(() => {
    if(user !== null) {
      if(user.type === 'admin') {
        setDisplayUsuariosCadastrados('flex')
      }
    } 
  })
  
  function submite() {
    navigate('/userInterface')
    setNameLogo('User Interface')

    setValueName(user.nome)
    setValueData(user.data)  
    setValueEmail(user.email)
    setValueSenha(user.senha)
    setValueCpf(user.cpf)
    setValueCep(user.cep)
  }
    
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
      <HomePageDiv id="homePage">
        
        <div className="divTitle">
          <h1> Seja bem vindo {user.nome}! <span> <AiFillEdit onClick={() => submite()}/>  </span></h1>
          <p>Por favor escolha sua sessão.</p>
        </div>
        
  
        <div className="divCards">

          <Link 
            className="usuariosCadastrados"
            to="/usuariosCadastrados" 
            onClick={() => setNameLogo('Usuarios Cadastrados')}
            style={{display: displayUsuariosCadastrados}}
          >
            <CardsHomePage>
              <h1> Usuarios Cadastrados </h1>
              <FaUsersCog />
              <p> Clique para redirecionar </p>
            </CardsHomePage>
          </Link>

          <Link to="/filmes" onClick={() => setNameLogo('Filmes')}>
            <CardsHomePage>
              <h1> Filmes </h1>
              <RiMovieFill />
              <p> Clique para ver mais </p>
            </CardsHomePage>
          </Link>
  
          <Link to="/noticias" onClick={() => setNameLogo('Noticias')}> 
            <CardsHomePage>
              <h1> Noticias </h1>
              <HiDocumentReport />
              <p>  Clique para ver mais  </p>
            </CardsHomePage>
          </Link>
  
        </div>
  
        
       
      </HomePageDiv>
    )
  }
}