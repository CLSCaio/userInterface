import { useEffect } from "react"
import { UseOpenMenu } from '../../services/context'
import AcountInterface from "../../components/acountInterface"


export default function UserRegistration() {
  const { setNameLogo, buttonTudoOk } = UseOpenMenu()

  useEffect(() => {
    setNameLogo('Cadastro de usuarios')
  }, )

  return(
   <AcountInterface 
    input="registration"
    buttonSave="CADASTRAR"
    path={buttonTudoOk === 'Voltar' ? '/homePage' : '/'}
  />
  )
}