import { Routes, Route } from "react-router-dom"
import LoginInterface from "../../pages/loginInterface/"
import HomePage from "../../pages/homePage/"
import NoticiasHome from "../conteudo/conteudoNoticias/"
import Filmes from "../conteudo/filmes/"
import UserInterface from "../../pages/userInterface"
import UserRegistration from "../../pages/userRegistration"
import EsqueceuSenha from "../../pages/esqueceuSenha"
import NotFound from '../../pages/notFound'
import UsuariosCadastrados from "../conteudo/usuariosCadastrados"


export default function RoutesLinks() {
  return (
    <Routes>
      <Route 
        path="/"
        element={<LoginInterface />}
        exact
      />

      <Route
        path="/homePage"
        element={<HomePage />}
        exact
      />
      
      <Route 
        path="/userInterface"
        element={<UserInterface />}
      />

      <Route
        path="/filmes"
        element={<Filmes />}  
        exact
      />

      <Route
        path="/noticias"
        element={<NoticiasHome />}
        exact  
      />

      <Route
        path="/userRegistration"
        element={<UserRegistration />}
        exact  
      />

      <Route
        path="/esqueceuSenha"
        element={<EsqueceuSenha />}
        exact  
      />

      <Route
        path="/usuariosCadastrados"
        element={<UsuariosCadastrados />}
        exact
      />

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  )
}
