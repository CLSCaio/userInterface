import React, {useEffect} from 'react';
import Header from './components/header';
import { ProviderOpenMenu } from './services/context'
import { BrowserRouter} from 'react-router-dom'
import functionAPP from './services/functions/functionAPP'

import Routes from './modules/router';

export default function App() {

  useEffect(() => {
    functionAPP()
  }, [])

  return (
 
    <BrowserRouter>
      <ProviderOpenMenu>
        <Header />
        <div className="invibleDiv" />

        <main>
          <Routes />
        </main>
      </ProviderOpenMenu>
    </BrowserRouter>

      
  )
}