import React from 'react'
import { Navbar, Container } from 'rbx'
import { useAuth } from '../context/auth-context'

export function Header() {
  const { logout } = useAuth()

  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Navbar.Item>Gerencia de inventario</Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="end">
            <Navbar.Item onClick={logout}>Salir</Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Container>
    </Navbar>
  )
}
