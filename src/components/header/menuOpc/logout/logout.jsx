import React from 'react'
import { DivUlLi } from './styles'
import { Link } from 'react-router-dom'
import logoutUser from '../../../../services/functions/login/logoutUser'
import { UseOpenMenu } from '../../../../services/context/'
const Logout = () => {
  const { setNameLogo } = UseOpenMenu()

    return (
    <DivUlLi className="navigation">
      <ul>
        <Link to="/login" onClick={() => logoutUser()}>
          <li onClick={() => setNameLogo('Home')}>Logout</li>
        </Link>
      </ul>
    </DivUlLi>
  ) 
}

export default Logout