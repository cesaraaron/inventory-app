import React from 'react'
import { Navbar, Container } from 'rbx'
import useReactRouter from 'use-react-router'
import { AUTH_TOKEN } from '../utils'

export function Header() {
  const { history } = useReactRouter()

  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Navbar.Item>Gerencia de inventario</Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="end">
            <Navbar.Item
              onClick={() => {
                localStorage.setItem(AUTH_TOKEN, null)
                history.push('/login')
              }}
            >
              Salir
            </Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Container>
    </Navbar>
  )
}
