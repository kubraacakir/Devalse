import React, { useState } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { Link, useNavigate } from 'react-router-dom'
import logo from './D2.png'

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  function handleSignOut(params) {
    setIsAuthenticated(false)
    navigate('/')
  }
  function handleSignIn(params) {
    setIsAuthenticated(true)
  }
  return (
    <div>
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item name='AnaSayfa' as={Link} to="/"/>
          <Menu.Item name='Fiyat Al' />
          <Menu.Item name='Iletişim' />
          <Menu.Menu position='right'>
            <img src={logo} width={150} height={70} />
          </Menu.Menu>
          <Menu.Menu position='right'>
            
            {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
          </Menu.Menu>
        </Container>

      </Menu>
    </div>
  )
}
