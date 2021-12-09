import React, { useEffect } from "react"
import AcountInterface from "../../components/acountInterface"
import recarregarLoginPage from "../../services/functions/outras/recarregarLoginPage"
import { UseOpenMenu } from "../../services/context"

export default function UserInterface() {
  const userActive = JSON.parse(sessionStorage.getItem('userActive'))
  const { setButtonTudoOk } = UseOpenMenu()

  useEffect(() => {
    setButtonTudoOk('Voltar')
  }, )
 
  if(userActive === null) {

    return(
      <>
        <h1> Sessao encerrada, você sera redirecionado para a tela de login! </h1>
        {recarregarLoginPage(2000)}
      </>
    )

  } else {

    return (
      <AcountInterface 
        input="userInterface"
        buttonSave="SALVAR"
        path="/homePage"
      />
    )         
  }
}